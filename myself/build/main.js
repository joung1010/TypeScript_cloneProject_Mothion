import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TaskComponent } from './components/item/task.js';
import { PopupComponent } from './components/popup/popup.js';
import { MediaInputComponent } from './components/popup/item/media-input.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
        const video = new VideoComponent('Video', 'https://www.youtube.com/watch?v=qtlWnuv3TF4&ab_channel=%ED%83%AC%ED%83%AC%EB%B2%84%EB%A6%B0');
        const note = new NoteComponent('note', 'noteBody');
        const task = new TaskComponent('task', 'taskBody');
        this.page.addChild(video);
        this.page.addChild(note);
        this.page.addChild(task);
        const imgBtn = document.querySelector('#imgBtn');
        imgBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const media = new MediaInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(media);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const img = new ImageComponent(media.title, media.url);
                this.page.addChild(img);
                popup.removeFrom(document.body);
            });
        });
    }
}
new App(document.querySelector('.jobs'));
//# sourceMappingURL=main.js.map