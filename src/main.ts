import {PopupImple,popupJobs} from './popup/popup.js';
import addItem from './item/item.js';
//https://picsum.photos/300/200
// https://www.youtube.com/embed/3YOPj_pbQPY
const popup = new PopupImple();
const popupCloseBtn = document.querySelector('.popup__cancel');
const popupAddBtn = document.querySelector('.popup__add');

const imgBtn = document.querySelector('#imgBtn');
const videoBtn = document.querySelector('#videoBtn');
const noteBtn = document.querySelector('#noteBtn');
const taskBtn = document.querySelector('#taskBtn');
const popAddBtn = document.querySelector('.popup__add');

popupCloseBtn?.addEventListener("click",()=>{
    popup.closePopup();
});

popupAddBtn?.addEventListener("click",(evvent:Event)=>{
    const target = evvent.target as HTMLButtonElement;
    const job = target.dataset.target as popupJobs;
    popup.addItem(job, addItem);
})

imgBtn?.addEventListener('click', (evvent:Event) => {
    const target = evvent.target as HTMLButtonElement;
    const job = target.name as popupJobs;
    popupAddBtn?.setAttribute("data-target", job);
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
    popupAddBtn?.setAttribute("data-target", job);
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