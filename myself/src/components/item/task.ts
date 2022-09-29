import {BaseComponent,Component} from'../component.js'

export class TaskComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, note:string) {
        super(` <section class="task">
                                    <h1 class="page__title task__title"></h1>
                                <div class="task__body-container">
                                <input type="checkbox" id="todo-check">
                                 <label for="todo-check" class="task__body"></label>
                                </div>
                                </section>
                                `);
        const taskTitle = this.element.querySelector('.task__title')! as HTMLIFrameElement;
        taskTitle.textContent = note
        const taskBody = this.element.querySelector('.task__body')! as HTMLHeadElement;
        taskBody.textContent = title;
    }
}

