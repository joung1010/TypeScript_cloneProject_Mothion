import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/items/image.js';
import { VideoComponent } from './components/page/items/video.js';
import { NoteComponent } from './components/page/items/note.js';
import { TodoComponent } from './components/page/items/todo.js';
import { InputDialog } from './components/dialog/dialog.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attaachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/200');
        const video = new VideoComponent('Video Title', 'https://youtu.be/qtlWnuv3TF4');
        const note = new NoteComponent('Note TItle', 'Note Body');
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(image);
        this.page.addChild(video);
        this.page.addChild(note);
        this.page.addChild(todo);
        const imgBtn = document.querySelector('#new-image');
        imgBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attaachTo(document.body);
        });
    }
}
new App(document.querySelector('.document'));
