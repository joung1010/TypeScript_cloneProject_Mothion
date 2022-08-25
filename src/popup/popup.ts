type popupJobs = 'img' | 'video' | 'note' | 'task';
type popupOptions ={
    jobs:popupJobs;
    width:number;
    height:number;
}

interface Popup {

    makePopup(): void;


    closePopup(): void;

}

class PopupImple implements Popup {
    private popupContainer = document.querySelector('.popup__container') as HTMLElement;
    constructor(private options :Partial<popupOptions>) {
    }

    makePopup() {
        this.popupContainer.classList.remove('.popup-hide');
        this.setOptions(this.popupContainer);
        const item = this.makeItem();
        const body = document.querySelector('.popup__body')as HTMLElement;;
        body.innerHTML = item;
        this.addEvent();
    }

    closePopup() {
        this.popupContainer.classList.add('.popup-hide');
    }

    addEvent() {
        document.addEventListener('click',()=>{
            console.log('click');
        });
    }

    setOptions(popNode : HTMLElement):void {
        const {width,jobs,height} = this.options
        if (width) {
            popNode.style.width = `${width}px`;
        }
        if (height) {
            popNode.style.width = `${height}px`;
        }
    }

    makeItem() :string{
        const{jobs} = this.options
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

}
export default PopupImple;