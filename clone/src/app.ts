import {PageComponent,Composasble,PageItemComponent} from './components/page/page.js';
import {ImageComponent} from './components/page/items/image.js';
import {VideoComponent} from './components/page/items/video.js';
import {NoteComponent} from './components/page/items/note.js';
import {TodoComponent} from './components/page/items/todo.js';
import {Component} from './components/component.js'
import {InputDialog} from './components/dialog/dialog.js'
import {TextSectionInput} from './components/dialog/input/text-input.js';
import {MediaSectionInput} from './components/dialog/input/media-input.js';

class App {
    private readonly page: Component & Composasble;

    constructor(appRoot: HTMLElement, dialogRoot : HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attaachTo(appRoot);

        // const image = new ImageComponent('Image Title', 'https://picsum.photos/600/200');
        // const video = new VideoComponent('Video Title','https://youtu.be/qtlWnuv3TF4');
        // const note = new NoteComponent('Note TItle', 'Note Body');
        // const todo = new TodoComponent('Todo Title', 'Todo Item');

        const imgBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imgBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attaachTo(dialogRoot);

            dialog.setOnCloseListener(()=>{
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=>{
                // 섹션을 만들어서 페이지에 추가
                const image = new ImageComponent(mediaSection.title,mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attaachTo(dialogRoot);

            dialog.setOnCloseListener(()=>{
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=>{
                // 섹션을 만들어서 페이지에 추가
                const video = new VideoComponent(mediaSection.title,mediaSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attaachTo(dialogRoot);

            dialog.setOnCloseListener(()=>{
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=>{
                // 섹션을 만들어서 페이지에 추가
                const note = new NoteComponent(textSection.title,textSection.body);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });

        const todo = document.querySelector('#new-todo')! as HTMLButtonElement;
        todo.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attaachTo(dialogRoot);

            dialog.setOnCloseListener(()=>{
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=>{
                // 섹션을 만들어서 페이지에 추가
                const todo = new TodoComponent(textSection.title,textSection.body);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement,document.body);