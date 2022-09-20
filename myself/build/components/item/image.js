export class ImageComponent {
    constructor(title, url) {
        const template = document.createElement('template');
        template.innerHTML = ` <section class="img">
                                <div class="img__item"><img src="" alt="" class="image__thumbnail"></img></div>
                                <h1 class="item__title"></h1>
                                </section>
                                `;
        this.element = template.content.firstElementChild;
        const img = this.element.querySelector('.image__thumbnail');
        img.src = url;
        img.alt = title;
        const imgTitle = this.element.querySelector('.item__title');
        imgTitle.textContent = title;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=image.js.map