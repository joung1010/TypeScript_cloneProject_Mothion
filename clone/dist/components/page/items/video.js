import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(titile, url) {
        super(`<section class="video">
         <div class="video__player">
            <iframe  class="video__iframe"></iframe>
          </div>
            <h3 class="video__title"></h3>
        </section>`);
        this.embedURL = 'https://www.youtube.com/embed/';
        const video = this.element.querySelector('.video__iframe');
        const idx = url.lastIndexOf('/') + 1;
        const videoId = url.slice(idx);
        video.src = this.embedURL + videoId;
        video.title = titile;
        const title = this.element.querySelector('.video__title');
        title.textContent = titile;
    }
}
