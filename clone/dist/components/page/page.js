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
        this.element.addEventListener('dragenter', (event) => {
            this.onDragEnter(event);
        });
        this.element.addEventListener('dragleave', (event) => {
            this.onDragLeave(event);
        });
    }
    onDragStart(_) {
        this.notifyDragObservers('start');
    }
    onDragEnd(_) {
        this.notifyDragObservers('stop');
    }
    onDragEnter(_) {
        this.notifyDragObservers('enter');
    }
    onDragLeave(_) {
        this.notifyDragObservers('leave');
    }
    notifyDragObservers(dragState) {
        this.dragStateListener && this.dragStateListener(this, dragState);
    }
    addChild(child) {
        const container = this.element.querySelector('.page-item__body');
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnDragStateListener(listener) {
        this.dragStateListener = listener;
    }
    muteChildren(state) {
        if (state === 'mute') {
            this.element.classList.add('mute-children');
        }
        else {
            this.element.classList.remove('mute-children');
        }
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConsturctor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConsturctor = pageItemConsturctor;
        this.children = new Set();
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('drop', (event) => {
            this.onDrop(event);
        });
    }
    onDragOver(event) {
        event.preventDefault();
        console.log('drag Over');
    }
    onDrop(event) {
        event.preventDefault();
        console.log('drop');
        if (!this.dropTarget) {
            return;
        }
        if (this.dragTarget && this.dragTarget !== this.dropTarget) {
            this.dragTarget.removeFrom(this.element);
            this.dropTarget.attach(this.dragTarget, 'beforebegin');
        }
    }
    addChild(section) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
            this.children.delete(item);
        });
        this.children.add(item);
        item.setOnDragStateListener((target, state) => {
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
                    this.dropTarget = target;
                    break;
                case "leave":
                    this.dropTarget = undefined;
                    break;
                default:
                    throw new Error(`unsupported state: ${state}`);
            }
        });
    }
    updateSections(state) {
        this.children.forEach((section) => {
            section.muteChildren(state);
        });
    }
}
