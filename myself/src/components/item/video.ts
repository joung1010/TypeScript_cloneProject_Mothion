import {BaseComponent,Component} from'../component.js'

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, url:string) {
        super(` <section class="video">
                                 <div class="video__item">
                                      <iframe class="video__iframe"  src=""></iframe>
                                  </div>
                                <h1 class="page__title video__title"></h1>
                                </section>
                                `);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = getEmbededURL(url);
        iframe.title = title;
        const videoTitle = this.element.querySelector('.video__title')! as HTMLHeadElement;
        videoTitle.textContent = title;
    }
}

function getEmbededURL(url: string): string {
    const regex = /(?:(?:https?:\/{2})?(?:www.?)?)?youtu(?:be)?\.(?:be|com)\/(?:(?:watch\?v=)?(?:embed\/)?)?([a-zA-Z0-9]{11,})/;
    const match  = url.match(regex);
    const videoID = match ? match[1] || null : null;
    if (videoID) {
        return `https://www.youtube.com/embed/${videoID}`;
    }
    return url;
}