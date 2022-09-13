type popupJobs = 'img' | 'video' | 'note' | 'task';
type popupOptions ={
    jobs:popupJobs;
    width:number;
    height:number;
}

interface Popup {

    makePopup(options :Partial<popupOptions>): void;


    closePopup(): void;

    addItem(jobs:popupJobs, callback:(title:string, value:string)=>void):void;

}

class PopupImple implements Popup {
    private popupContainer = document.querySelector('.popup__container') as HTMLDivElement ;
    constructor() {
    }

    makePopup(options :Partial<popupOptions>,) {
        this.setOptions(options);
        const item = this.makeItem(options);
        const body = document.querySelector('.popup__body')as HTMLDivElement;;
        body.innerHTML = item;
        this.highLight();
        this.popupContainer.classList.remove('popup-hide');
    }

    closePopup() {
        this.popupContainer.classList.add('popup-hide');
        this.removeHeighLight();
    }

    highLight() {
        const containerList : NodeListOf<HTMLElement> = document.querySelectorAll('.container');
        containerList.forEach((item:HTMLElement) => {
            item.classList.add('highlight');
        });
    }

    removeHeighLight() {
        const containerList : NodeListOf<HTMLElement> = document.querySelectorAll('.container');
        containerList.forEach((item:HTMLElement) => {
            item.classList.remove('highlight');
        });
    }

    setOptions(options :Partial<popupOptions>):void {
        const {width,jobs,height} = options
        if (width) {
            this.popupContainer.style.width = `${width}px`;
        }
        if (height) {
            this.popupContainer.style.width = `${height}px`;
        }
    }

    makeItem(options:Partial<popupOptions>) :string{
        const{jobs} = options
        const title = this.getTitile(jobs);
        return `
        <div class="popup__input">
            <label for="${jobs}__title">Title</label>
            <input id="${jobs}__title" type="text">
        </div>
        <div class="popup__input">
            <label for="${jobs}">${title}</label>
            <input id="${jobs}" type="text">
        </div>
        `;
    }

    getTitile(job:popupJobs | undefined):string {
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

    addItem(jobs:popupJobs,callback:(title:string,value:string,job:string)=>void) {
        const addBtn = document.querySelector('.popup__add');
        const title = document.querySelector(`#${jobs}__title`) as HTMLInputElement;
        const targetItem = document.querySelector(`#${jobs}`)as HTMLInputElement;
        callback(title.value, targetItem.value, jobs);
        this.closePopup();
    }

}
export  {PopupImple,Popup,popupOptions,popupJobs};