import {PageComponent} from './components/page/page.js'
import {ImageComponent} from './components/item/image.js'
import {VideoComponent} from './components/item/video.js'
import {NoteComponent} from './components/item/note.js'
import {TaskComponent} from './components/item/task.js'

class App {
    private readonly page:PageComponent
    constructor(appRoot:HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);

        const img = new ImageComponent('imgComponent','https://picsum.photos/600/200');
        img.attaachTo(appRoot, 'beforeend');

        const video = new VideoComponent('Video','https://www.youtube.com/watch?v=qtlWnuv3TF4&ab_channel=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0');
        video.attaachTo(appRoot, 'beforeend');

        const note = new NoteComponent('note','noteBody');
        note.attaachTo(appRoot, 'beforeend');

        const task = new TaskComponent('task','taskBody');
        task.attaachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.jobs')! as HTMLElement);
