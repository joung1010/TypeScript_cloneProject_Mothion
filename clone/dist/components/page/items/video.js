import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(titile, url) {
        super(`<section class="video">
         <div class="video__holder">
       <iframe  class="video__item"
                src=""
                title=""
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
           </div>
            <p class="video__title"></p>
        </section>`);
        const video = this.element.querySelector('.video__item');
        video.src = url;
        video.title = titile;
        const title = this.element.querySelector('.video__title');
        title.textContent = titile;
    }
}
