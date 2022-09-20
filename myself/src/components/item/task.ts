export class TaskComponent {
    private element: HTMLElement;
    constructor(title:string, note:string) {

        const template = document.createElement('template');
        template.innerHTML = ` <section class="task">
                                    <h1 class="task__title"></h1>
                                 <p class="task__body">
                                      
                                  </p>
                                </section>
                                `;
        this.element = template.content.firstElementChild! as HTMLSelectElement;
        const taskTitle = this.element.querySelector('.note__title')! as HTMLIFrameElement;
        taskTitle.textContent = note
        const taskBody = this.element.querySelector('.note__body')! as HTMLHeadElement;
        taskBody.textContent = title;
    }
    attaachTo(mainElement:HTMLElement,position:InsertPosition= 'afterbegin') {
        mainElement.insertAdjacentElement(position , this.element);
    }
}

