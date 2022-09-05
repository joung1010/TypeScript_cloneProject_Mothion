const jobsContainer = document.querySelector('.jobs');
function addItem(title, item, job) {
    const jobs = makeItem(title, item, job);
    const div = document.createElement('div');
    div.classList.add('jobs__item');
    div.innerHTML = jobs;
    jobsContainer.appendChild(div);
}
function makeItem(title, item, job) {
    const _item = getTargetItem(job, item);
    return getJobs(job, title, _item);
}
function getJobs(job, title, itemNode) {
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
            jobs = `
        <div class="item__note">
                <div class="item__title">test</div>
                ${itemNode}
         </div>
            `;
            break;
        default:
            throw new Error(`no jobs ${job}`);
            break;
    }
    jobs += `<button class="item__btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
            </button>`;
    return jobs;
}
function getTargetItem(job, item) {
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
        case 'note':
            return `<div class="note__contents">${item}</div>`;
        default:
            throw new Error(`no jobs ${job}`);
    }
}
export default addItem;
//# sourceMappingURL=item.js.map