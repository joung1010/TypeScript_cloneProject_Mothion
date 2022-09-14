import {BaseComponent} from '../../component.js'
export class ImageComponent extends BaseComponent{
    constructor(title:string,url:string) {
        const template = document.createElement('template');
        template.innerHTML=`<section class="image">
    <div class="image__holder"><img src="" alt="" class="image__thumbnail"></div>
    <p class="image__title"></p>
    </section>`;
        super(template.content.firstElementChild! as HTMLElement);
        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src=url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
}