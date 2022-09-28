import { BaseComponent } from '../../component.js';
export class MediaInputComponent extends BaseComponent {
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
    get title() {
        const input = this.element.querySelector('#title');
        return input.value;
    }
    get url() {
        const input = this.element.querySelector('#url');
        return input.value;
    }
}
//# sourceMappingURL=media-input.js.map