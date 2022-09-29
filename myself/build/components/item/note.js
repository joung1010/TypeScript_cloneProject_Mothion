import { BaseComponent } from '../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, note) {
        super(` <section class="note">
                                    <h1 class="page__title note__title"></h1>
                                 <p class="note__body"></p>
                                </section>
                                `);
        const noteTitle = this.element.querySelector('.note__title');
        noteTitle.textContent = note;
        const noteBody = this.element.querySelector('.note__body');
        noteBody.textContent = title;
    }
}
//# sourceMappingURL=note.js.map