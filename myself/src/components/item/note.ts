import {BaseComponent,Component} from'../component.js'

export class NoteComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, note:string) {

        super(` <section class="note">
                                    <h1 class="note__title"></h1>
                                 <p class="note__body">
                                      
                                  </p>
                                </section>
                                `);
        const noteTitle = this.element.querySelector('.note__title')! as HTMLIFrameElement;
        noteTitle.textContent = note
        const noteBody = this.element.querySelector('.note__body')! as HTMLHeadElement;
        noteBody.textContent = title;
    }
}

