import { BaseComponent } from '../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(` <section class="video">
                                 <div class="video__item">
                                      <iframe class="video__iframe"  src=""></iframe>
                                  </div>
                                <h1 class="video__title"></h1>
                                </section>
                                `);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = getEmbededURL(url);
        iframe.title = title;
        const videoTitle = this.element.querySelector('.video__title');
        videoTitle.textContent = title;
    }
}
function getEmbededURL(url) {
    const regex = /(?:(?:https?:\/{2})?(?:www.?)?)?youtu(?:be)?\.(?:be|com)\/(?:(?:watch\?v=)?(?:embed\/)?)?([a-zA-Z0-9]{11,})/;
    const match = url.match(regex);
    const videoID = match ? match[1] || null : null;
    if (videoID) {
        return `https://www.youtube.com/embed/${videoID}`;
    }
    return url;
}
//# sourceMappingURL=video.js.map