import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { PopupComponent } from './components/popup/popup.js';
import { MediaInputComponent } from './components/popup/item/media-input.js';
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
    }
}
new App(document.querySelector('.jobs'));
//# sourceMappingURL=main.js.map