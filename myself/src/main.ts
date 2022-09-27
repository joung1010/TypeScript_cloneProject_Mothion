import {PageComponent,Composable} from './components/page/page.js'
import {ImageComponent} from './components/item/image.js'
import {VideoComponent} from './components/item/video.js'
import {NoteComponent} from './components/item/note.js'
import {TaskComponent} from './components/item/task.js'
import {Component} from './components/component.js'
import {PopupComponent} from './components/popup/popup.js';

class App {
    private readonly page:PageComponent & Composable;
    constructor(appRoot:HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);

        const img = new ImageComponent('imgComponent','https://picsum.photos/600/200');
        const video = new VideoComponent('Video','https://www.youtube.com/watch?v=qtlWnuv3TF4&ab_channel=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0');
        const note = new NoteComponent('note','noteBody');
        const task = new TaskComponent('task','taskBody');
        this.page.addChild(img);
        this.page.addChild(video);
        this.page.addChild(note);
        this.page.addChild(task);

        const imgBtn = document.querySelector('#imgBtn')! as HTMLButtonElement;
        imgBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            popup.attaachTo(document.body);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
        });
    }
}
new App(document.querySelector('.jobs')! as HTMLElement);
