import { BaseComponent } from '../../component.js';
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
        <div class="form__container">
        <label for="title">Title</label>
        <input type="text" id="title">
        </div>
        <div class="form__container">
        <label for="body">Body</label> 
        <textarea id="body"  rows="3"></textarea>
        </div>
        </div>`);
    }
    get body() {
        const element = this.element.querySelector('#body');
        return element.value;
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
}
