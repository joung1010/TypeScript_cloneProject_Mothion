import { BaseComponent } from '../component.js';
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <button class="page_item__controls">
                       <span><i class="fa fa-times " aria-hidden="true"></i></span>
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
        super(`<ul class="page"></ul>`);
    }
    addChild(section) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attaachTo(this.element, 'beforeend');
    }
}
