export class NoteComponent {
    private element: HTMLElement;
    constructor(title:string, note:string) {

        const template = document.createElement('template');
        template.innerHTML = ` <section class="note">
                                    <h1 class="note__title"></h1>
                                 <p class="note__body">
                                      
                                  </p>
                                </section>
                                `;
        this.element = template.content.firstElementChild! as HTMLSelectElement;
        const noteTitle = this.element.querySelector('.note__title')! as HTMLIFrameElement;
        noteTitle.textContent = note
        const noteBody = this.element.querySelector('.note__body')! as HTMLHeadElement;
        noteBody.textContent = title;
    }
    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
    }
}

