export class BaseComponent{
    protected element: HTMLElement;
    constructor(element : HTMLElement) {
        this.element = element!;
    }
    attaachTo(parent: HTMLElement, position:InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}