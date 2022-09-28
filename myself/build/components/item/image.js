import { BaseComponent } from '../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(` <section class="img">
                                <div class="img__item"><img src="" alt="" class="image__thumbnail"></img></div>
                                <h1 class="page__title item__title"></h1>
                                </section>
                                `);
        const img = this.element.querySelector('.image__thumbnail');
        img.src = url;
        img.alt = title;
        const imgTitle = this.element.querySelector('.item__title');
        imgTitle.textContent = title;
    }
}
//# sourceMappingURL=image.js.map