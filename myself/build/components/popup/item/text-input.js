import { BaseComponent } from '../../component.js';
export class TextInputComponent extends BaseComponent {
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
    get title() {
        const input = this.element.querySelector('#title');
        return input.value;
    }
    get body() {
        const input = this.element.querySelector('#body');
        return input.value;
    }
}
//# sourceMappingURL=text-input.js.map