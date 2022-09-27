import {BaseComponent} from '../component.js';

export class PopupComponent extends BaseComponent<HTMLElement>{
    constructor() {
        super(`<div class="popup">
               <div class="popup__container">
                    <button class="close">&times;</button>
                    <section class="popup__body"></section>
                    <button class="submit">Add</button>
                </div>
            </div>`);
    }
}