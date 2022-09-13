import {PageComponent} from './components/page.js';

class App {
    private readonly page: PageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attaachTo(appRoot);
    }
}

new App(document.querySelector('.document')! as HTMLElement);