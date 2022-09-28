import {BaseComponent} from '../../component.js'

export class TextInputComponent extends BaseComponent<HTMLElement>{
    constructor() {
        super(`<div>
        <div class="form__input">
              <label for="title">Title</label>
              <input type="text" id="title">
          </div>
            <div class="form__input">
                <label for="body">Body</label>
                <textarea id="body" rows="3" class="pop__body"></textarea>
            </div>
        </div>`);
    }
    get title() : string {
        const input =  this.element.querySelector('#title')! as HTMLInputElement;
        return input.value;
    }

    get body() {
        const input =  this.element.querySelector('#body')! as HTMLInputElement;
        return input.value;
    }
}