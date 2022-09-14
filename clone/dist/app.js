import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/items/image.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/200');
        image.attaachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
