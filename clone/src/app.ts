import {PageComponent,Composasble} from './components/page/page.js';
import {ImageComponent} from './components/page/items/image.js';
import {VideoComponent} from './components/page/items/video.js';
import {NoteComponent} from './components/page/items/note.js';
import {TodoComponent} from './components/page/items/todo.js';
import {Component} from './components/component.js'
class App {
    private readonly page: Component & Composasble;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/200');
        const video = new VideoComponent('Video Title','https://youtu.be/qtlWnuv3TF4');
        const note = new NoteComponent('Note TItle', 'Note Body');
        const todo = new TodoComponent('Todo Title', 'Todo Item');

        this.page.addChild(image);
        this.page.addChild(video);
        this.page.addChild(note);
        this.page.addChild(todo);
    }
}

new App(document.querySelector('.document')! as HTMLElement);