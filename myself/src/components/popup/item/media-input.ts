import {BaseComponent} from '../../component.js'

export class MediaInputComponent extends BaseComponent<HTMLElement>{
    constructor() {
        super(`<div>
        <div class="form__input">
              <label for="title">Title</label>
              <input type="text" id="title">
          </div>
            <div class="form__input">
                <label for="url">URL</label>
                <input type="text" id="url">
            </div>
        </div>`);
    }

    get title() : string {
        const input =  this.element.querySelector('#title')! as HTMLInputElement;
        return input.value;
    }

    get url() {
        const input =  this.element.querySelector('#url')! as HTMLInputElement;
        return input.value;
    }
}