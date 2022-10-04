import {BaseComponent,Component} from '../component.js'

export interface Composasble {
    addChild(child: Component): void;
}

type OnCloseListener = ()=> void;

interface SectionContainer extends Component, Composasble {
    setOnCloseListener(listener: OnCloseListener):void;
    setOnDragStateListener(listener:OnDragStateListener<SectionContainer>):void;
    muteChildren(state: 'mute' | 'unmute'):void;
    getBoundingRect():DOMRect;
    onDropped():void;
}

type SectionContainerConsturctor ={
    new () : SectionContainer;
}
type OnDragStateListener<T extends Component>  = (target:T,state:DragState) => void;
type DragState = 'start' | 'stop' | 'enter' | 'leave';

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;
    private dragStateListener?: OnDragStateListener<PageItemComponent>;

    constructor() {
        super(`<li class="page_iem" draggable="true">
               <section class="page-item__body"></section>
                   <div class="page_item__controls">
                       <button class="close">&times</button>
                   </div>
            </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        this.element.addEventListener('dragstart', (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener('dragend', (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener('dragenter', (event) => {
            this.onDragEnter(event);
        });
        this.element.addEventListener('dragleave', (event) => {
            this.onDragLeave(event);
        });
    }

    onDragStart(_:DragEvent) {
        this.element.classList.add('lifted');
        this.notifyDragObservers('start');
    }

    onDragEnd(_:DragEvent) {
        this.notifyDragObservers('stop');
        this.element.classList.remove('lifted');
    }
    onDragEnter(_:DragEvent) {
        this.element.classList.add('drop-area');
        this.notifyDragObservers('enter');
    }

    onDragLeave(_:DragEvent) {
        this.notifyDragObservers('leave');
        this.element.classList.remove('drop-area');
    }

    notifyDragObservers(dragState:DragState) {
        this.dragStateListener && this.dragStateListener(this,dragState);
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnDragStateListener(listener:OnDragStateListener<PageItemComponent>) {
        this.dragStateListener = listener;
    }
    muteChildren(state: "mute" | "unmute") {
        if (state === 'mute') {
            this.element.classList.add('mute-children');
        } else {
            this.element.classList.remove('mute-children');
        }
    }
    getBoundingRect(): DOMRect {
        return this.element.getBoundingClientRect();
    }
    onDropped() {
        this.element.classList.remove('drop-area');
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composasble{
    private children = new Set<SectionContainer>();
    private dropTarget? : SectionContainer;
    private dragTarget? : SectionContainer;
    constructor(private pageItemConsturctor:SectionContainerConsturctor) {
         super(`<ul class="page"></ul>`);
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('drop', (event) => {
            this.onDrop(event);
        });
    }

    onDragOver(event:DragEvent) {
        event.preventDefault();
        console.log('drag Over');
    }

    onDrop(event:DragEvent) {
        event.preventDefault();
        console.log('drop');
        //여기서 위치를 바꿔주면 된다.
        if (!this.dropTarget) {
            return;
        }
        if (this.dragTarget && this.dragTarget !== this.dropTarget) {
            const dropY = event.clientY;
            const srcElement = this.dragTarget.getBoundingRect();
            this.dragTarget.removeFrom(this.element);
            this.dropTarget.attach(this.dragTarget, dropY < srcElement.y ?  'beforebegin':'afterend');
        }
        this.dropTarget.onDropped();
    }

    addChild(section: Component) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attachTo(this.element,'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
            this.children.delete(item);
        });
        this.children.add(item);
        item.setOnDragStateListener((target,state)=>{
            switch (state) {
                case "start":
                    this.dragTarget = target;
                    this.updateSections('mute');
                    break;
                case "stop":
                    this.dragTarget = undefined;
                    this.updateSections('unmute');
                    break;
                case "enter":
                    this.dropTarget=target;
                    break;
                case "leave":
                    this.dropTarget=undefined;
                    break;
                default:
                    throw new Error(`unsupported state: ${state}`);
            }
        });
    }

    private updateSections(state: 'mute' | 'unmute') {
        this.children.forEach((section:SectionContainer)=>{
            section.muteChildren(state);
        })
    }
}
