export class BaseComponent {
    constructor(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        this.element = template.content.firstElementChild;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=component.js.map