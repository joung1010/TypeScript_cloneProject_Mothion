import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem" draggable="true">
               <section class="page-item__body"></section>
                   <div class="page_item__controls">
                       <button class="close">&times</button>
                   </div>
            </li>`);
        const closeBtn = this.element.querySelector('.close');
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
    onDragStart(event) {
        console.log('start', event);
    }
    onDragEnd(event) {
        console.log('end', event);
    }
    addChild(child) {
        const container = this.element.querySelector('.page-item__body');
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConsturctor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConsturctor = pageItemConsturctor;
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('drop', (event) => {
            this.onDragDrop(event);
        });
    }
    onDragOver(event) {
        event.preventDefault();
        console.log('drag Over');
    }
    onDragDrop(event) {
        event.preventDefault();
        console.log('drop');
    }
    addChild(section) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
