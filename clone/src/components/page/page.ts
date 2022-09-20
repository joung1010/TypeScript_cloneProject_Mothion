import {BaseComponent,Component} from '../component.js'

export interface Composasble {
    addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composasble{
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <button class="page_item__controls">
                       <span><i class="fa fa-times " aria-hidden="true"></i></span>
                   </button>
               </section>
            </li>`);
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page_item__body')! as HTMLElement;
        child.attaachTo(container);
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composasble{
    constructor() {
         super(`<ul class="page"></ul>`);
    }

    addChild(section: Component) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attaachTo(this.element,'beforeend');
    }
}
