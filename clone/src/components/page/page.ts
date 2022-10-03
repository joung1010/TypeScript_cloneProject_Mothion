import {BaseComponent,Component} from '../component.js'

export interface Composasble {
    addChild(child: Component): void;
}

type OnCloseListener = ()=> void;

interface SectionContainer extends Component, Composasble {
    setOnCloseListener(listener: OnCloseListener):void;
}

type SectionContainerConsturctor ={
    new () : SectionContainer;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;
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
    }

    onDragStart(event:DragEvent) {
        console.log('start', event);
    }

    onDragEnd(event:DragEvent) {
        console.log('end', event);
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composasble{
    constructor(private pageItemConsturctor:SectionContainerConsturctor) {
         super(`<ul class="page"></ul>`);
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('drop', (event) => {
            this.onDragDrop(event);
        });
    }

    onDragOver(event:DragEvent) {
        event.preventDefault();
        console.log('drag Over');
    }

    onDragDrop(event:DragEvent) {
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
    }
}
