export class NoteComponent {
    constructor(title, note) {
        const template = document.createElement('template');
        template.innerHTML = ` <section class="note">
                                    <h1 class="note__title"></h1>
                                 <p class="note__body">
                                      
                                  </p>
                                </section>
                                `;
        this.element = template.content.firstElementChild;
        const noteTitle = this.element.querySelector('.note__title');
        noteTitle.textContent = note;
        const noteBody = this.element.querySelector('.note__body');
        noteBody.textContent = title;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=note.js.map