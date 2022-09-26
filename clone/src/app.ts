import {PageComponent,Composasble,PageItemComponent} from './components/page/page.js';
import {ImageComponent} from './components/page/items/image.js';
import {VideoComponent} from './components/page/items/video.js';
import {NoteComponent} from './components/page/items/note.js';
import {TodoComponent} from './components/page/items/todo.js';
import {Component} from './components/component.js'
import {InputDialog,TextData,MediaData} from './components/dialog/dialog.js'
import {TextSectionInput} from './components/dialog/input/text-input.js';
import {MediaSectionInput} from './components/dialog/input/media-input.js';

type inputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new(): T;
}

class App {
    private readonly page: Component & Composasble;

    constructor(appRoot: HTMLElement, private dialogRoot : HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attaachTo(appRoot);

        //  image https://picsum.photos/600/200
        //  video https://youtu.be/qtlWnuv3TF4
        this.bindElementToDialog<MediaSectionInput>('#new-image',MediaSectionInput,(input:MediaSectionInput)=> new ImageComponent(input.title,input.url));
        this.bindElementToDialog<MediaSectionInput>('#new-video',MediaSectionInput,(input:MediaSectionInput)=> new VideoComponent(input.title,input.url));
        this.bindElementToDialog<TextSectionInput>('#new-note',TextSectionInput,(input:TextSectionInput)=> new NoteComponent(input.title,input.body));
        this.bindElementToDialog<TextSectionInput>('#new-todo',TextSectionInput,(input:TextSectionInput)=> new TodoComponent(input.title,input.body));

    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(selector:string,inputComponent:inputComponentConstructor<T>
    ,makeSection: (input:T) => Component
    ) {
        const elementBtn = document.querySelector(selector)! as HTMLButtonElement;
        elementBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new inputComponent();

            dialog.addChild(input);
            dialog.attaachTo(this.dialogRoot);

            dialog.setOnCloseListener(()=>{
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(()=>{
                // 섹션을 만들어서 페이지에 추가
                const component = makeSection(input);
                this.page.addChild(component);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement,document.body);