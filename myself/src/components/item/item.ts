const jobsContainer = document.querySelector('.jobs') as HTMLElement;

function addItem(title:string, item:string,job:string):void {
    const jobs = makeItem(title, item, job);
    const div = document.createElement('div');
    div.classList.add('jobs__item');
    div.setAttribute("draggable","true");
    div.innerHTML = jobs;
    jobsContainer.appendChild(div);
    addCancelBtn();
    addDragable();
}

function makeItem(title:string, item:string,job:string):string {
    const _item = getTargetItem(job, item);
    return getJobs(job,title,_item);
}

function getJobs(job:string,title:string,itemNode:string):string {
    let jobs;
    switch (job) {
        case 'img':
        case 'video':
            jobs = `
                ${itemNode}
            <div class="item__body">
                <div class="item__title">${title}</div>
            </div>
        `;
            break;
        case 'note':
        case 'task':
            jobs =  `
        <div class="item__note">
                <div class="item__title">${title}</div>
                ${itemNode}
         </div>
            `;
            break;
        default:
            throw  new Error(`no jobs ${job}`);
            break;
    }
    jobs += `<button class="item__btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
            </button>`;
    return jobs;
}

function getTargetItem(job: string,item:string):string {
    switch (job) {
        case 'img':
            return `<div class="item__img"><img src="${item}"></img></div>`;
        case 'video':
            return `
            <div class="item__video">
          <iframe width="100%" height="100%" src="${item}"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe></div>
            `;
        case'note':
            return `<div class="note__contents">${item}</div>`;
        case 'task':
            return  `<ul class="task__contents"><li class="task__job">${item}</li></ul>`;
        default :
            throw  new Error(`no jobs ${job}`);
    }
}

function addCancelBtn() {
    const itemBtn = document.querySelector('.item__btn');
    itemBtn?.addEventListener('click',(event:Event)=>{
        const target = event.target as HTMLButtonElement;
          const parentNode = target.parentNode;
        let targetNode;
        if (parentNode?.nodeName === 'BUTTON') {
            targetNode = parentNode?.parentNode as Node;
        } else {
            targetNode = parentNode?.parentNode?.parentNode as Node;
        }
        jobsContainer?.removeChild(targetNode);
    });
}

function addDragable() {
    const jobItem = document.querySelectorAll('.jobs__item');
    let currentItemIndex:number ;
    let currentItem:HTMLElement ;
    let parentElement:HTMLElement ;
    jobsContainer.addEventListener('dragstart', (event) => {
         currentItem = event.target as HTMLDivElement;
        currentItem?.classList.add('dragging');
         parentElement = currentItem.parentElement as HTMLElement;
        const listArr = [...parentElement.children];
        currentItemIndex = listArr.indexOf(currentItem);
    });

    jobsContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    jobsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        currentItem?.classList.remove('dragging');
        const currentDropItem = e.target as HTMLElement;
        const listArr = [...parentElement.children];
        const dropItemIndex = listArr.indexOf(currentDropItem);

        if (currentItemIndex < dropItemIndex) {
            currentDropItem.after(currentItem);
        } else {
            currentDropItem.before(currentItem);
        }
    });

}



export default addItem;