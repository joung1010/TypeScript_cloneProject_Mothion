import {BaseComponent,Component} from '../component.js';
import {Composasble} from '../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
    readonly title: string;
    readonly url: string;
}

export interface TextData {
    readonly title: string;
    readonly body: string;
}

export class InputDialog extends BaseComponent<HTMLElement> implements Composasble {
    private closeListener?:OnCloseListener;
    private submitListener?:OnSubmitListener;
    constructor() {
        super(`<dialog class="dialog">
        <div class="dialog__container">
            <button class="close">&times;</button>
            <div class="dialog__body"></div>
            <button class="dialog__submit">Add</button>
        </div>
        </dialog>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLButtonElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }

    setOnCloseListenr(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnSubmitListenr(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector('.dialog__body')! as HTMLElement;
        child.attachTo(body);
    }
}