export class BaseComponent {
    constructor(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        this.element = template.content.firstElementChild;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
    removeFrom(parentElement) {
        if (parentElement !== this.element.parentElement) {
            throw new Error('Paraent missmatch');
        }
        parentElement.removeChild(this.element);
    }
    attatch(component, position) {
        component.attaachTo(this.element, position);
    }
}
//# sourceMappingURL=component.js.map