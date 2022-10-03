import {PageComponent,Composasble,PageItemComponent} from './components/page/page.js';
import {ImageComponent} from './components/page/items/image.js';
import {VideoComponent} from './components/page/items/video.js';
import {NoteComponent} from './components/page/items/note.js';
import {TodoComponent} from './components/page/items/todo.js';
import {Component} from './components/component.js'
import {InputDialog,TextData,MediaData} from './components/dialog/dialog.js'
import {TextSectionInput} from './components/dialog/input/text-input.js';
import {MediaSectionInput} from './components/dialog/input/media-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new(): T;
}

class App {
    private readonly page: Component & Composasble;

    constructor(appRoot: HTMLElement, private dialogRoot : HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        //  image https://picsum.photos/600/200
        //  video https://youtu.be/qtlWnuv3TF4
        this.bindElementToDialog<MediaSectionInput>('#new-image',MediaSectionInput,(input:MediaSectionInput)=> new ImageComponent(input.title,input.url));
        this.bindElementToDialog<MediaSectionInput>('#new-video',MediaSectionInput,(input:MediaSectionInput)=> new VideoComponent(input.title,input.url));
        this.bindElementToDialog<TextSectionInput>('#new-note',TextSectionInput,(input:TextSectionInput)=> new NoteComponent(input.title,input.body));
        this.bindElementToDialog<TextSectionInput>('#new-todo',TextSectionInput,(input:TextSectionInput)=> new TodoComponent(input.title,input.body));

        // For demo :)
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://youtu.be/qtlWnuv3TF4'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=5qrcQmE2JmM'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));

    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
        selector: string,
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input: T) => Component
    ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
                const component = makeSection(input);
                this.page.addChild(component);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement,document.body);