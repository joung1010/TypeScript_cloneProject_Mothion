import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <button class="page_item__controls">
                       <span>X</i></span>
                   </button>
               </section>
            </li>`);
    }
    addChild(child) {
        const container = this.element.querySelector('.page_item__body');
        child.attaachTo(container);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<ul></ul>`);
    }
    addChild(component) {
        const item = new PageItemComponent();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
    }
}
//# sourceMappingURL=page.js.map