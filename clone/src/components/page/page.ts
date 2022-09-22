import {BaseComponent,Component} from '../component.js'

export interface Composasble {
    addChild(child: Component): void;
}

type OnCloseListener = ()=> void;

interface SectionContainer extends Component, Composasble {
    setOnCloseListener(listener: OnCloseListener):void;
}

type SectionContainerConsturctor ={
    new () : SectionContainer;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;
    constructor() {
        super(`<li class="page_iem">
               <section class="page_item__body">
                   <div class="page_item__controls">
                       <button class="close">&times</button>
                   </div>
               </section>
            </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page_item__body')! as HTMLElement;
        child.attaachTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composasble{
    constructor(private pageItemConsturctor:SectionContainerConsturctor) {
         super(`<ul class="page"></ul>`);
    }

    addChild(section: Component) {
        const item = new this.pageItemConsturctor();
        item.addChild(section);
        item.attaachTo(this.element,'beforeend');
        item.setOnCloseListener(()=> {
            item.removeFrom(this.element);
        })
    }
}
