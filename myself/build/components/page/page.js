import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem" draggable="true">
               <section class="page_item__body">
                   <div class="page_item__controls">
                       <button class="close">&times;</button>
                   </div>
               </section>
            </li>`);
        const close = this.element.querySelector('.page_item__controls');
        close.onclick = () => {
            this.closeListene && this.closeListene();
        };
        this.element.addEventListener('dragstart', (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener('dragend', (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('dragleave', (event) => {
            this.onDragLeave(event);
        });
    }
    onDragStart(event) {
        event.dataTransfer.effectAllowed = 'move';
        this.element.classList.add('dragging');
        this.onDragObserver(event, 'start');
    }
    onDragEnd(event) {
        this.onDragObserver(event, 'end');
    }
    onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        this.element.classList.add('drag-over');
        this.onDragObserver(event, 'over');
    }
    onDragLeave(event) {
        event.stopPropagation();
        this.element.classList.remove('drag-over');
    }
    onDragObserver(event, state) {
        this.dragListener && this.dragListener(this, state, event);
    }
    addChild(child) {
        const container = this.element.querySelector('.page_item__body');
        child.attaachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListene = listener;
    }
    setOnDragListener(listener) {
        this.dragListener = listener;
    }
    getBoundingClientRect() {
        return this.element.getBoundingClientRect();
    }
    onDrop() {
        this.element.classList.remove('dragging');
        this.element.classList.remove('drag-over');
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
        this.element.addEventListener('drop', (event) => {
            this.onDrop(event);
        });
    }
    onDrop(event) {
        event.preventDefault();
        if (!this.dropElement || !this.dragElement) {
            return;
        }
        if (this.dragElement !== this.dropElement) {
            const dragY = this.dragElement.getBoundingClientRect().y;
            const dropY = this.dropElement.getBoundingClientRect().y;
            this.dragElement.removeFrom(this.element);
            this.dropElement.attatch(this.dragElement, dragY < dropY ? 'afterend' : 'beforebegin');
        }
        this.dragElement.onDrop();
        this.dropElement.onDrop();
    }
    addChild(component) {
        const item = new this.pageItemConstructor();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
        item.setOnDragListener((target, state, event) => {
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
//# sourceMappingURL=page.js.map