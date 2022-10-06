var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseComponent } from '../component.js';
import { EnableDragging, EnableDrop, EnableHover } from '../../decorators/draggable.js';
let PageItemComponent = class PageItemComponent extends BaseComponent {
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
    }
    onDragStart(_) {
        this.element.classList.add('lifted');
        this.notifyDragObservers('start');
    }
    onDragEnd(_) {
        this.notifyDragObservers('stop');
        this.element.classList.remove('lifted');
    }
    onDragEnter(_) {
        this.element.classList.add('drop-area');
        this.notifyDragObservers('enter');
    }
    onDragLeave(_) {
        this.notifyDragObservers('leave');
        this.element.classList.remove('drop-area');
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
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    onDropped() {
        this.element.classList.remove('drop-area');
    }
};
PageItemComponent = __decorate([
    EnableDragging,
    EnableHover
], PageItemComponent);
export { PageItemComponent };
let PageComponent = class PageComponent extends BaseComponent {
    constructor(pageItemConsturctor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConsturctor = pageItemConsturctor;
        this.children = new Set();
    }
    onDragOver(_) { }
    onDrop(event) {
        event.preventDefault();
        console.log('drop');
        if (!this.dropTarget) {
            return;
        }
        if (this.dragTarget && this.dragTarget !== this.dropTarget) {
            const dropY = event.clientY;
            const srcElement = this.dragTarget.getBoundingRect();
            this.dragTarget.removeFrom(this.element);
            this.dropTarget.attach(this.dragTarget, dropY < srcElement.y ? 'beforebegin' : 'afterend');
        }
        this.dropTarget.onDropped();
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
};
PageComponent = __decorate([
    EnableDrop
], PageComponent);
export { PageComponent };
