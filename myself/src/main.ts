import {PageComponent,Composable} from './components/page/page.js'
import {ImageComponent} from './components/item/image.js'
import {VideoComponent} from './components/item/video.js'
import {NoteComponent} from './components/item/note.js'
import {TaskComponent} from './components/item/task.js'
import {Component} from './components/component.js'
import {PopupComponent} from './components/popup/popup.js';
import {MediaInputComponent} from './components/popup/item/media-input.js';

class App {
    private readonly page:PageComponent & Composable;
    constructor(appRoot:HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);

        //https://picsum.photos/600/200
        // https://www.youtube.com/watch?v=qtlWnuv3TF4&ab_channel=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0
        // const note = new NoteComponent('note','noteBody');
        // const task = new TaskComponent('task','taskBody');

        // this.page.addChild(img);
        // this.page.addChild(video);
        // this.page.addChild(note);
        // this.page.addChild(task);

        const imgBtn = document.querySelector('#imgBtn')! as HTMLButtonElement;
        imgBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const media = new MediaInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(media);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const img = new ImageComponent(media.title,media.url);
                this.page.addChild(img);
                popup.removeFrom(document.body);
            });
        });

        const videoBtn = document.querySelector('#videoBtn')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const media = new MediaInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(media);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const video = new VideoComponent(media.title,media.url);
                this.page.addChild(video);
                popup.removeFrom(document.body);
            });
        });
    }
}
new App(document.querySelector('.jobs')! as HTMLElement);
