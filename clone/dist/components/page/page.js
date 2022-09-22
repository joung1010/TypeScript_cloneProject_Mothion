import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <div class="page_item__controls">
                       <button class="close">&times</button>
                   </div>
               </section>
            </li>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector('.page_item__body');
        child.attaachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConsturctor) {
        super(`<ul class="page"></ul>`);
        this.pageItemConsturctor = pageItemConsturctor;
    }
    addChild(section) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attaachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
