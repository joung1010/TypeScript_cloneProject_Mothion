import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent {
    constructor(title, items) {
        super(`<section class="todo">
                <h1 class="todo__title"></h1>
                <input type="checkbox" class="todo__checkbox">
        </section>`);
        const todoTitle = this.element.querySelector('.todo__title');
        todoTitle.textContent = title;
        const todoItems = this.element.querySelector('.todo__checkbox');
        todoItems.insertAdjacentText('afterend', items);
    }
}
