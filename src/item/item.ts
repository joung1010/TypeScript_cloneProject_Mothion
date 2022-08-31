const jobsContainer = document.querySelector('.jobs') as HTMLSelectElement;

function addItem(title:string, item:string,job:string):void {
    const jobs = makeItem(title, item, job);
    const div = document.createElement('div');
    div.classList.add('jobs__item');
    div.innerHTML = jobs;
    jobsContainer.appendChild(div);
}

function makeItem(title:string, item:string,job:string) {
    const _item = findTarget(job, item);
    return `
                ${_item}
            <div class="item__body">
                <div class="item__title">${title}</div>
                <div class="item__btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
    `;
}

function findTarget(job: string,item:string):string {
    switch (job) {
        case 'img':
            return `<img src="${item}"></img>`;
        case 'video':
            return `<ifame 
                 type="text/html"
                title="youtube player"
                width="100%"
                height="500"
                src="${item}"
                frameBorder="0"
                allowFullScreen
                />`;
        default :
            throw  new Error(`no jobs ${job}`);
    }
}

export default addItem;