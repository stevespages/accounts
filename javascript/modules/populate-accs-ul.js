export function populateAccsUl(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const set = accounts.sets[setIdx];
    dom.els.set_dAccs_ul.innerHTML = "";
    set.accs.forEach((acc, accIdx) => {
        const li = document.createElement("li");
        li.dataset.accIdx = accIdx;
        li.classList.add("acc-li");
        const accNameSpan = document.createElement("span");
        accNameSpan.dataset.accIdx = accIdx;
        accNameSpan.classList.add("acc-name-span");
        if (accIdx === 0) {
            accNameSpan.classList.add("inactive");
        }
        const accNameTextNode = document.createTextNode(acc.accName);
        accNameSpan.append(accNameTextNode)
        const accTotalSpan = document.createElement("span");
        accTotalSpan.dataset.accIdx = accIdx;
        accTotalSpan.classList.add("acc-total-span");
        li.append(accNameSpan, accTotalSpan);
        dom.els.set_dAccs_ul.append(li);
    })
}
