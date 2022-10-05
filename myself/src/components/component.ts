export interface Component {
    attaachTo(mainElement:HTMLElement,position?:InsertPosition):void;

    removeFrom(parentElement: HTMLElement):void;
    attatch(component: Component, position: InsertNextTo):void;
}

type InsertNextTo = 'beforebegin' | 'afterend';

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

    removeFrom(parentElement: HTMLElement) {
        if (parentElement !== this.element.parentElement) {
            throw new Error('Paraent missmatch');
        }
        parentElement.removeChild(this.element);
    }

    attatch(component: Component, position: InsertNextTo) {
        component.attaachTo(this.element, position);
    }
}