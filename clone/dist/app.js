import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/items/image.js';
import { VideoComponent } from './components/page/items/video.js';
import { NoteComponent } from './components/page/items/note.js';
import { TodoComponent } from './components/page/items/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/200');
        image.attaachTo(appRoot, 'beforeend');
        const video = new VideoComponent('Video Title', 'https://youtu.be/qtlWnuv3TF4');
        video.attaachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note TItle', 'Note Body');
        note.attaachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        todo.attaachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
