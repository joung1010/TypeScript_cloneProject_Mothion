import {PageComponent, Composable} from './components/page/page.js'
import {ImageComponent} from './components/item/image.js'
import {VideoComponent} from './components/item/video.js'
import {NoteComponent} from './components/item/note.js'
import {TaskComponent} from './components/item/task.js'
import {Component} from './components/component.js'
import {PopupComponent} from './components/popup/popup.js';
import {MediaInputComponent, MediaData} from './components/popup/item/media-input.js';
import {TextInputComponent, TextData} from './components/popup/item/text-input.js';


type InputConstructor<T extends (TextData | MediaData) & Component> = {
    new(): T;
}


class App {
    private readonly page: PageComponent & Composable;

    constructor(appRoot: HTMLElement,private popupParent:HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
        //https://picsum.photos/600/200
        // https://www.youtube.com/watch?v=qtlWnuv3TF4&ab_channel=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0

        this.addContent<MediaInputComponent>('imgBtn',MediaInputComponent,(input)=>{
            return  new ImageComponent(input.title, input.url);
        })
        this.addContent<MediaInputComponent>('videoBtn',MediaInputComponent,(input)=>{
            return  new VideoComponent(input.title,input.url);
        })
        this.addContent<TextInputComponent>('noteBtn',TextInputComponent,(input)=>{
            return  new NoteComponent(input.title,input.body);
        })
        this.addContent<TextInputComponent>('taskBtn',TextInputComponent,(input)=>{
            return  new TaskComponent(input.title,input.body);
        })

        // For demo :)
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://youtu.be/qtlWnuv3TF4'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TaskComponent('Todo Title', 'TypeScript Course!'));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=5qrcQmE2JmM'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TaskComponent('Todo Title', 'TypeScript Course!'));

    }

    private addContent<T extends (TextData | MediaData) & Component>(elementId: string, input: InputConstructor<T>, makeContent: (input: T) => Component) {
        const elementBtn = document.querySelector(`#${elementId}`)! as HTMLButtonElement;
        elementBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const inputComponent = new input();
            popup.attaachTo(this.popupParent);
            popup.addChild(inputComponent);
            popup.setCloseListener(() => {
                popup.removeFrom(this.popupParent);
            });
            popup.setSubmitListener(() => {
                const content =  makeContent(inputComponent);
                this.page.addChild(content);
                popup.removeFrom(document.body);
            });
        })
    }
}

new App(document.querySelector('.jobs')! as HTMLElement,document.body);
