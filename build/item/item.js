const jobsContainer = document.querySelector('.jobs');
function addItem(title, item, job) {
    const jobs = makeItem(title, item, job);
    const div = document.createElement('div');
    div.classList.add('jobs__item');
    div.innerHTML = jobs;
    jobsContainer.appendChild(div);
}
function makeItem(title, item, job) {
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
function findTarget(job, item) {
    switch (job) {
        case 'img':
            return `<img src="${item}"></img>`;
        case 'video':
            return `
          <iframe width="100%" height="100%" src="${item}"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
            `;
        default:
            throw new Error(`no jobs ${job}`);
    }
}
export default addItem;
//# sourceMappingURL=item.js.map