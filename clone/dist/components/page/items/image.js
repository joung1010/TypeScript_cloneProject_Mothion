import { BaseComponent } from '../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
                <div class="image__holder"><img src="" alt="" class="image__thumbnail"></div>
                <h1 class="page-item__title image__title"></h1>
              </section>`);
        const imageElement = this.element.querySelector('.image__thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image__title');
        titleElement.textContent = title;
    }
}
