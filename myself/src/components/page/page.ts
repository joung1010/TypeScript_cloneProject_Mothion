import {BaseComponent,Component} from'../component.js'

export interface Composable {
    addChild(child: Component):void;
}

type OnCloseListener = () => void;

export class PageItemComponent extends BaseComponent<HTMLLIElement>{
    private closeListene? : OnCloseListener;
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <div class="page_item__controls">
                       <button class="close">&times;</button>
                   </div>
               </section>
            </li>`);
        const close = this.element.querySelector('.page_item__controls')! as HTMLButtonElement;

        close.onclick = () => {
            this.closeListene && this.closeListene();
        }
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page_item__body')! as HTMLElement;
        child.attaachTo(container);
    }

    setOnCloseListener(listener : OnCloseListener) {
        this.closeListene = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
        super(`<ul class="page"></ul>`);
    }

    addChild(component:Component) {
        const item = new PageItemComponent();
        item.addChild(component);
        item.attaachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }

}