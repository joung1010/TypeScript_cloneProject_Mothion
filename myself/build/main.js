import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TaskComponent } from './components/item/task.js';
import { PopupComponent } from './components/popup/popup.js';
import { MediaInputComponent } from './components/popup/item/media-input.js';
import { TextInputComponent } from './components/popup/item/text-input.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
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
        const videoBtn = document.querySelector('#videoBtn');
        videoBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const media = new MediaInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(media);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const video = new VideoComponent(media.title, media.url);
                this.page.addChild(video);
                popup.removeFrom(document.body);
            });
        });
        const noteBtn = document.querySelector('#noteBtn');
        noteBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const textContent = new TextInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(textContent);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const note = new NoteComponent(textContent.title, textContent.body);
                this.page.addChild(note);
                popup.removeFrom(document.body);
            });
        });
        const taskBtn = document.querySelector('#taskBtn');
        taskBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const textContent = new TextInputComponent();
            popup.attaachTo(document.body);
            popup.addChild(textContent);
            popup.setCloseListener(() => {
                popup.removeFrom(document.body);
            });
            popup.setSubmitListener(() => {
                const task = new TaskComponent(textContent.title, textContent.body);
                this.page.addChild(task);
                popup.removeFrom(document.body);
            });
        });
    }
}
new App(document.querySelector('.jobs'));
//# sourceMappingURL=main.js.map