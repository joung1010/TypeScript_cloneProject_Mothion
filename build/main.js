import { PopupImple } from './popup/popup.js';
const popup = new PopupImple();
const popupCancelBtn = document.querySelector('.popup__cancel');
const popupAddBtn = document.querySelector('.popup__add');
const imgBtn = document.querySelector('#imgBtn');
const videoBtn = document.querySelector('#videoBtn');
const noteBtn = document.querySelector('#noteBtn');
const taskBtn = document.querySelector('#taskBtn');
const popAddBtn = document.querySelector('.popup__add');
popupCancelBtn === null || popupCancelBtn === void 0 ? void 0 : popupCancelBtn.addEventListener("click", () => {
    popup.closePopup();
});
imgBtn === null || imgBtn === void 0 ? void 0 : imgBtn.addEventListener('click', (evvent) => {
    const target = evvent.target;
    const job = target.name;
    popup.makePopup({
        jobs: job,
    });
    popup.addEvent(job, (title, value) => {
    });
});
noteBtn === null || noteBtn === void 0 ? void 0 : noteBtn.addEventListener('click', (evvent) => {
    const target = evvent.target;
    const job = target.name;
    popup.makePopup({
        jobs: job,
    });
});
videoBtn === null || videoBtn === void 0 ? void 0 : videoBtn.addEventListener('click', (evvent) => {
    const target = evvent.target;
    const job = target.name;
    popup.makePopup({
        jobs: job,
    });
});
taskBtn === null || taskBtn === void 0 ? void 0 : taskBtn.addEventListener('click', (evvent) => {
    const target = evvent.target;
    const job = target.name;
    popup.makePopup({
        jobs: job,
    });
});
//# sourceMappingURL=main.js.map