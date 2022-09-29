import { BaseComponent } from '../component.js';
export class TaskComponent extends BaseComponent {
    constructor(title, note) {
        super(` <section class="task">
                                    <h1 class="page__title task__title"></h1>
                                <div class="task__body-container">
                                <input type="checkbox" id="todo-check">
                                 <label for="todo-check" class="task__body"></label>
                                </div>
                                </section>
                                `);
        const taskTitle = this.element.querySelector('.task__title');
        taskTitle.textContent = note;
        const taskBody = this.element.querySelector('.task__body');
        taskBody.textContent = title;
    }
}
//# sourceMappingURL=task.js.map