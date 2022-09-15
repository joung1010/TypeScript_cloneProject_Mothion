import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(titile, url) {
        super(`<section class="video">
         <div class="video__player">
            <iframe  class="video__iframe"></iframe>
          </div>
            <h3 class="video__title"></h3>
        </section>`);
        const video = this.element.querySelector('.video__iframe');
        video.src = this.convertToEmbeddedURL(url);
        video.title = titile;
        const title = this.element.querySelector('.video__title');
        title.textContent = titile;
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
