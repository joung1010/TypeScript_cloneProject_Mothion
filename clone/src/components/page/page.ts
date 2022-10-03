import {BaseComponent,Component} from '../component.js'

export interface Composasble {
    addChild(child: Component): void;
}

type OnCloseListener = ()=> void;

interface SectionContainer extends Component, Composasble {
    setOnCloseListener(listener: OnCloseListener):void;
    setOnDragStateListener(listener:OnDragStateListener<SectionContainer>):void;
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
        this.notifyDragObservers('start');
    }

    onDragEnd(_:DragEvent) {
        this.notifyDragObservers('stop');
    }
    onDragEnter(_:DragEvent) {
        this.notifyDragObservers('enter');
    }

    onDragLeave(_:DragEvent) {
        this.notifyDragObservers('leave');
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
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composasble{
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
        console.log('drop')
    }

    addChild(section: Component) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attachTo(this.element,'beforeend');
        item.setOnCloseListener(()=> {
            item.removeFrom(this.element);
        })
        item.setOnDragStateListener((target,state)=>{
            console.log(target, state);
        });
    }
}
