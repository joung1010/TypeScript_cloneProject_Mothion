import {BaseComponent,Component} from'../component.js'

export class TaskComponent extends BaseComponent<HTMLElement>{
    constructor(title:string, note:string) {
        super(` <section class="task">
                                    <h1 class="task__title"></h1>
                                 <p class="task__body">
                                      
                                  </p>
                                </section>
                                `);
        const taskTitle = this.element.querySelector('.task__title')! as HTMLIFrameElement;
        taskTitle.textContent = note
        const taskBody = this.element.querySelector('.task__body')! as HTMLHeadElement;
        taskBody.textContent = title;
    }
}

