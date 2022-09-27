import {BaseComponent,Component} from '../component.js';
import {Composable} from '../page/page.js';
type Listener = ()=>void;


export class PopupComponent extends BaseComponent<HTMLElement> implements Composable{
    private closeListener?:Listener;
    private submitListener?:Listener;

    constructor() {
        super(`<div class="popup">
               <div class="popup__container">
                    <button class="close">&times;</button>
                    <section class="popup__body"></section>
                    <button class="submit">Add</button>
                </div>
            </div>`);

        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.addEventListener('click',()=>{
            this.closeListener && this.closeListener();
        })
        const submitBtn = this.element.querySelector('.submit')! as HTMLButtonElement;
        submitBtn.addEventListener('click', () => {
            this.submitListener && this.submitListener();
        });
    }

    setCloseListener(listener:Listener) {
        this.closeListener = listener;
    }

    setSubmitListener(listener: Listener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector('.popup__body')! as HTMLSelectElement;
        child.attaachTo(body);
    }

}