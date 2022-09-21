import {BaseComponent,Component} from'../component.js'

export class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
        super(`<ul>This is Page</ul>`);
    }

}