import {PopupImple,popupJobs} from './popup/popup.js';

const popup = new PopupImple();
const popupCancelBtn = document.querySelector('.popup__cancel') ;
const popupAddBtn = document.querySelector('.popup__add') ;

const imgBtn = document.querySelector('#imgBtn');
const videoBtn = document.querySelector('#videoBtn');
const noteBtn = document.querySelector('#noteBtn');
const taskBtn = document.querySelector('#taskBtn');

popupCancelBtn?.addEventListener("click",()=>{
    popup.closePopup();
});

imgBtn?.addEventListener('click', (evvent:Event) => {
    const target = evvent.target as HTMLButtonElement;
    const job = target.name as popupJobs;
    popup.makePopup({
        jobs:job,
    });
});

noteBtn?.addEventListener('click', (evvent:Event) => {
    const target = evvent.target as HTMLButtonElement;
    const job = target.name as popupJobs;
    popup.makePopup({
        jobs:job,
    });
});
videoBtn?.addEventListener('click', (evvent:Event) => {
    const target = evvent.target as HTMLButtonElement;
    const job = target.name as popupJobs;
    popup.makePopup({
        jobs:job,
    });
});
taskBtn?.addEventListener('click', (evvent:Event) => {
    const target = evvent.target as HTMLButtonElement;
    const job = target.name as popupJobs;
    popup.makePopup({
        jobs:job,
    });
});