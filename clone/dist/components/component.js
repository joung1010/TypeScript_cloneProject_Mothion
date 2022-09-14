export class BaseComponent {
    constructor(element) {
        this.element = element;
    }
    attaachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
