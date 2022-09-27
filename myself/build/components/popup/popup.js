import { BaseComponent } from '../component.js';
export class PopupComponent extends BaseComponent {
    constructor() {
        super(`<div class="popup">
               <div class="popup__container">
                    <button class="close">&times;</button>
                    <section class="popup__body"></section>
                    <button class="submit">Add</button>
                </div>
            </div>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            this.closeListener && this.closeListener();
        });
        const submitBtn = this.element.querySelector('.submit');
        submitBtn.addEventListener('click', () => {
            this.submitListener && this.submitListener();
        });
    }
    setCloseListener(listener) {
        this.closeListener = listener;
    }
    setSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('.popup__body');
        child.attaachTo(body);
    }
}
//# sourceMappingURL=popup.js.map