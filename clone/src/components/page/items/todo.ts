import {BaseComponent} from '../../component.js'

export class TodoComponent extends  BaseComponent<HTMLElement>{
    constructor(title:string, items:string) {
        super(`<section class="todo">
                <h1 class="todo__title"></h1>
                <input type="checkbox" class="todo__checkbox">
        </section>`);
        const todoTitle = this.element.querySelector('.todo__title')! as HTMLHeadElement;
        todoTitle.textContent = title;
        const todoItems = this.element.querySelector('.todo__checkbox')! as HTMLInputElement;
        todoItems.insertAdjacentText('afterend',items);
    }

}