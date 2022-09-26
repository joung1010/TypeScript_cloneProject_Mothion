import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/items/image.js';
import { VideoComponent } from './components/page/items/video.js';
import { NoteComponent } from './components/page/items/note.js';
import { TodoComponent } from './components/page/items/todo.js';
import { InputDialog } from './components/dialog/dialog.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attaachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
    }
    bindElementToDialog(selector, inputComponent, makeSection) {
        const elementBtn = document.querySelector(selector);
        elementBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new inputComponent();
            dialog.addChild(input);
            dialog.attaachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const component = makeSection(input);
                this.page.addChild(component);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
