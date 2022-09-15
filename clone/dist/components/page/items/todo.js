import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent {
    constructor(title, items) {
        super(`<section class="todo">
                <h1 class="todo__title"></h1>
                <li class="todo__item"></li>
        </section>`);
        const todoTitle = this.element.querySelector('.todo__title');
        todoTitle.textContent = title;
        const todoItems = this.element.querySelector('.todo__item');
        todoItems.textContent = items;
    }
}
