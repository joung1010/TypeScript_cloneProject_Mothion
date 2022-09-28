import {BaseComponent,Component} from'../component.js'

export class ImageComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, url:string) {
        super(` <section class="img">
                                <div class="img__item"><img src="" alt="" class="image__thumbnail"></img></div>
                                <h1 class="page__title item__title"></h1>
                                </section>
                                `);
        const img = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        img.src = url;
        img.alt = title;
        const imgTitle = this.element.querySelector('.item__title')! as HTMLHeadElement;
        imgTitle.textContent = title;


    }
}