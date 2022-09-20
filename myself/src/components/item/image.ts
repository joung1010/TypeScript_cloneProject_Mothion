export class ImageComponent {
    private element: HTMLElement;
    constructor(title:string, url:string) {
        const template = document.createElement('template');
        template.innerHTML = ` <section class="img">
                                <div class="img__item"><img src="" alt="" class="image__thumbnail"></img></div>
                                <h1 class="item__title"></h1>
                                </section>
                                `;
        this.element = template.content.firstElementChild! as HTMLSelectElement;
        const img = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        img.src = url;
        img.alt = title;
        const imgTitle = this.element.querySelector('.item__title')! as HTMLHeadElement;
        imgTitle.textContent = title;


    }
    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
    }
}