import {BaseComponent, Component} from '../component.js'

export interface Composable {
    addChild(child: Component):void;
}

type OnCloseListener = () => void;
type OnDragListener<T extends Component> = (target:T,state:DragState,event:DragEvent) => void;
type DragState = 'start'|'end'|'over'|'leave';

type SectionConstructor<T extends SectionContainer> = {
    new():T
}

interface SectionContainer extends Component,Composable {
    setOnCloseListener(listener : OnCloseListener) :void
    setOnDragListener(listener: OnDragListener<SectionContainer>):void;
}

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements SectionContainer{
    private closeListene? : OnCloseListener;
    private dragListener? : OnDragListener<SectionContainer>;
    constructor() {
        super(`<li class="page_iem" draggable="true">
               <section class="page_item__body">
                   <div class="page_item__controls">
                       <button class="close">&times;</button>
                   </div>
               </section>
            </li>`);
        const close = this.element.querySelector('.page_item__controls')! as HTMLButtonElement;

        close.onclick = () => {
            this.closeListene && this.closeListene();
        }

        this.element.addEventListener('dragstart',(event:DragEvent)=>{
            this.onDragStart(event);
        });

        this.element.addEventListener('dragend',(event:DragEvent)=>{
            this.onDragEnd(event);
        });

        this.element.addEventListener('dragover',(event:DragEvent)=>{
            this.onDragOver(event);
        });

        this.element.addEventListener('dragleave',(event:DragEvent)=>{
            this.onDragLeave(event);
        });

    }

    onDragStart(event:DragEvent) {
        event.dataTransfer!.effectAllowed = 'move';
        event.dataTransfer!.setData('text/html', this.element.innerHTML);
        this.onDragObserver(event,  'start');
    }
    onDragEnd(event:DragEvent) {
        this.onDragObserver(event,  'end');
    }
    onDragOver(event:DragEvent) {
        event.preventDefault();
        event.dataTransfer!.dropEffect = 'move';
        this.onDragObserver(event,  'over');
    }
    onDragLeave(event:DragEvent) {
        event.stopPropagation();
        this.onDragObserver(event,  'leave');
    }

    private onDragObserver(event:DragEvent,state:DragState) {
        this.dragListener && this.dragListener(this,state,event);
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page_item__body')! as HTMLElement;
        child.attaachTo(container);
    }

    setOnCloseListener(listener : OnCloseListener) {
        this.closeListene = listener;
    }

    setOnDragListener(listener: OnDragListener<SectionContainer>) {
        this.dragListener = listener;
    }

}

export class PageComponent extends BaseComponent<HTMLUListElement>{
    private dragElement?: SectionContainer;
    private dropElement?: SectionContainer;
    constructor(private pageItemConstructor:SectionConstructor<SectionContainer> ) {
        super(`<ul class="page"></ul>`);
        this.element.addEventListener('dragover',(event:DragEvent)=>{
            this.onDragOver(event);
        });
        this.element.addEventListener('drop',(event:DragEvent)=>{
            this.onDrop(event);
        });
    }

    onDragOver(event:DragEvent) {
        event.preventDefault();
    }

    onDrop(event:DragEvent) {
        event.preventDefault();
        if (!this.dropElement || !this.dragElement) {
            return;
        }
        if (this.dragElement !== this.dropElement) {

        }
    }

    addChild(component:Component) {
        const item =new this.pageItemConstructor ();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
        item.setOnDragListener((target,state,event)=>{
            switch (state) {
                case "start":
                    this.dragElement = target;
                    break;
                case "end":
                    this.dragElement = undefined;
                    break;
                case "over":
                    this.dropElement = target;
                    break;
                case "leave":
                    this.dropElement = undefined;
                    break;
                default:
                    throw new Error(`There is no Options ${state}`);
            }
        });
    }

}