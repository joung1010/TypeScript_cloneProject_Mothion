import {BaseComponent} from '../component.js'

class PageComponent extends BaseComponent{
    constructor() {
         super(document.createElement('ul'));
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }
}
export {PageComponent}