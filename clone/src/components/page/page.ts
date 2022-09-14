import {BaseComponent} from '../component.js'

class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
         super(`<ul class="page">This is Page Component!</ul>`);
    }
}
export {PageComponent}