export class PageComponent {
    private element:HTMLElement;
    constructor() {
        const template = document.createElement('template')! as HTMLTemplateElement;
         template.innerHTML =  `<ul>This is Page</ul>`;
        this.element = template.content.firstElementChild! as HTMLUListElement;
    }

    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
    }
}