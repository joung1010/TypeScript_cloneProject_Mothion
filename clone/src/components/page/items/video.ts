import {BaseComponent} from '../../component.js'
export class VideoComponent extends BaseComponent<HTMLElement>{
    private embedURL :string = 'https://www.youtube.com/embed/';
    constructor(titile:string, url:string) {
        super(`<section class="video">
         <div class="video__player">
            <iframe  class="video__iframe"></iframe>
          </div>
            <h3 class="video__title"></h3>
        </section>`);
        const video = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        const idx = url.lastIndexOf('/') +1;
        const videoId = url.slice(idx)
        video.src = this.embedURL+videoId; // url -> videoId -> embed
        video.title=titile;
        const title = this.element.querySelector('.video__title')! as HTMLParagraphElement;
        title.textContent = titile;

    }
}
