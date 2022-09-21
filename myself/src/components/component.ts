export interface Component {
    attaachTo(mainElement:HTMLElement,position:InsertPosition):void;
}

export class BaseComponent<T extends HTMLElement> implements Component{
    protected element:T;
    constructor(html:string) {
        const template = document.createElement('template')! as HTMLTemplateElement;
        template.innerHTML =html;
        this.element = template.content.firstElementChild! as T;
    }
    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
    }
}