import { BaseComponent } from '../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, contents) {
        super(`<section class="note">
                <h1 class="page-item__title note__title"></h1>
                <p class="note__body"></p>
        </section>`);
        const noteTitle = this.element.querySelector('.note__title');
        noteTitle.textContent = title;
        const noteBody = this.element.querySelector('.note__body');
        noteBody.textContent = contents;
    }
}
