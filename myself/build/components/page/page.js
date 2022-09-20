export class PageComponent {
    constructor() {
        const template = document.createElement('template');
        template.innerHTML = `<ul>This is Page</ul>`;
        this.element = template.content.firstElementChild;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=page.js.map