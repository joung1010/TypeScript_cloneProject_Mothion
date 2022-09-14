export class ImageComponent {
    constructor(title, url) {
        const template = document.createElement('template');
        template.innerHTML = `<section class="image">
    <div class="image__holder"><img src="" alt="" class="image__thumbnail"></div>
    <p class="image__title"></p>
</section>`;
        this.element = template.content.firstElementChild;
        const imageElement = this.element.querySelector('.image__thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image__title');
        titleElement.textContent = title;
    }
    attaachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
