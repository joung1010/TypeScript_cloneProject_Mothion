import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem">
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
    }
    addChild(child) {
        const container = this.element.querySelector('.page_item__body');
        child.attaachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListene = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<ul class="page"></ul>`);
    }
    addChild(component) {
        const item = new PageItemComponent();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
//# sourceMappingURL=page.js.map