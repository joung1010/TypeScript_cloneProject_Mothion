import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TaskComponent } from './components/item/task.js';
import { PopupComponent } from './components/popup/popup.js';
import { MediaInputComponent } from './components/popup/item/media-input.js';
import { TextInputComponent } from './components/popup/item/text-input.js';
class App {
    constructor(appRoot, popupParent) {
        this.popupParent = popupParent;
        this.page = new PageComponent(PageItemComponent);
        this.page.attaachTo(appRoot);
        this.addContent('imgBtn', MediaInputComponent, (input) => {
            return new ImageComponent(input.title, input.url);
        });
        this.addContent('videoBtn', MediaInputComponent, (input) => {
            return new VideoComponent(input.title, input.url);
        });
        this.addContent('noteBtn', TextInputComponent, (input) => {
            return new NoteComponent(input.title, input.body);
        });
        this.addContent('taskBtn', TextInputComponent, (input) => {
            return new TaskComponent(input.title, input.body);
        });
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://youtu.be/qtlWnuv3TF4'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TaskComponent('Todo Title', 'TypeScript Course!'));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=5qrcQmE2JmM'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TaskComponent('Todo Title', 'TypeScript Course!'));
    }
    addContent(elementId, input, makeContent) {
        const elementBtn = document.querySelector(`#${elementId}`);
        elementBtn.addEventListener('click', () => {
            const popup = new PopupComponent();
            const inputComponent = new input();
            popup.attaachTo(this.popupParent);
            popup.addChild(inputComponent);
            popup.setCloseListener(() => {
                popup.removeFrom(this.popupParent);
            });
            popup.setSubmitListener(() => {
                const content = makeContent(inputComponent);
                this.page.addChild(content);
                popup.removeFrom(document.body);
            });
        });
    }
}
new App(document.querySelector('.jobs'), document.body);
//# sourceMappingURL=main.js.map