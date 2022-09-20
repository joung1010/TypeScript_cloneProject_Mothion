export class TaskComponent {
    constructor(title, note) {
        const template = document.createElement('template');
        template.innerHTML = ` <section class="task">
                                    <h1 class="task__title"></h1>
                                 <p class="task__body">
                                      
                                  </p>
                                </section>
                                `;
        this.element = template.content.firstElementChild;
        const taskTitle = this.element.querySelector('.note__title');
        taskTitle.textContent = note;
        const taskBody = this.element.querySelector('.note__body');
        taskBody.textContent = title;
    }
    attaachTo(mainElement, position = 'afterbegin') {
        mainElement.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=task.js.map