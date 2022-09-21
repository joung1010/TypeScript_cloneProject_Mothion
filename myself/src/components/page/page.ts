import {BaseComponent,Component} from'../component.js'

export interface Composable {
    addChild(child: Component):void;
}

export class PageItemComponent extends BaseComponent<HTMLLIElement>{
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <button class="page_item__controls">
                       <span>&times</span>
                   </button>
               </section>
            </li>`);
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page_item__body')! as HTMLElement;
        child.attaachTo(container);
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
        super(`<ul></ul>`);
    }

    addChild(component:Component) {
        const item = new PageItemComponent();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
    }

}