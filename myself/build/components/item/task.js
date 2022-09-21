import { BaseComponent } from '../component.js';
export class TaskComponent extends BaseComponent {
    constructor(title, note) {
        super(` <section class="task">
                                    <h1 class="task__title"></h1>
                                 <p class="task__body">
                                      
                                  </p>
                                </section>
                                `);
        const taskTitle = this.element.querySelector('.note__title');
        taskTitle.textContent = note;
        const taskBody = this.element.querySelector('.note__body');
        taskBody.textContent = title;
    }
}
//# sourceMappingURL=task.js.map