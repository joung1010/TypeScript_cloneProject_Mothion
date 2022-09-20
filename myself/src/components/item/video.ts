export class VideoComponent {
    private element: HTMLElement;
    constructor(title:string, url:string) {

        const template = document.createElement('template');
        template.innerHTML = ` <section class="video">
                                 <div class="video__item">
                                      <iframe class="video__iframe"  src=""></iframe>
                                  </div>
                                <h1 class="video__title"></h1>
                                </section>
                                `;
        this.element = template.content.firstElementChild! as HTMLSelectElement;
        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = getEmbededURL(url);
        iframe.title = title;
        const videoTitle = this.element.querySelector('.video__title')! as HTMLHeadElement;
        videoTitle.textContent = title;
    }
    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
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