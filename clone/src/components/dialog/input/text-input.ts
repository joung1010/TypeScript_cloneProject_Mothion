import {BaseComponent} from '../../component.js';
import {TextData} from '../dialog.js'
export class TextSectionInput extends BaseComponent<HTMLElement> implements TextData{
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

    get body(): string {
        const element = this.element.querySelector('#body')! as HTMLTextAreaElement;
        return element.value;
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }
}
