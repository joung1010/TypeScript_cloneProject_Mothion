class PopupImple {
    constructor() {
        this.popupContainer = document.querySelector('.popup__container');
    }
    makePopup(options) {
        this.popupContainer.classList.remove('popup-hide');
        this.setOptions(options);
        const item = this.makeItem(options);
        const body = document.querySelector('.popup__body');
        ;
        body.innerHTML = item;
        this.highLight();
    }
    closePopup() {
        this.popupContainer.classList.add('popup-hide');
        this.removeHeighLight();
    }
    highLight() {
        const containerList = document.querySelectorAll('.container');
        containerList.forEach((item) => {
            item.classList.add('highlight');
        });
    }
    removeHeighLight() {
        const containerList = document.querySelectorAll('.container');
        containerList.forEach((item) => {
            item.classList.remove('highlight');
        });
    }
    setOptions(options) {
        const { width, jobs, height } = options;
        if (width) {
            this.popupContainer.style.width = `${width}px`;
        }
        if (height) {
            this.popupContainer.style.width = `${height}px`;
        }
    }
    makeItem(options) {
        const { jobs } = options;
        const title = this.getTitile(jobs);
        return `
        <div class="popup__input">
            <label for="title">Title</label>
            <input id="title" type="text">
        </div>
        <div class="popup__input">
            <label for="${jobs}">${title}</label>
            <input id="${jobs}" type="text">
        </div>
        `;
    }
    getTitile(job) {
        switch (job) {
            case "img":
            case "video":
                return 'URL';
            case "task":
            case "note":
                return 'Body';
            default:
                throw new Error(`can not find job task ${job}`);
        }
    }
    addEvent(jobs, callback) {
        const addBtn = document.querySelector('.popup__add');
        const title = document.querySelector('#title');
        const targetItem = document.querySelector(`#${jobs}`);
        addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', () => {
            callback(title.value, targetItem.value);
        });
    }
}
export { PopupImple };
//# sourceMappingURL=popup.js.map