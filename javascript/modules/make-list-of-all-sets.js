export function makeListOfAllSets(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    dom.els.allSets_d_ul.innerHTML = "";
    accounts.sets.forEach((set, idx) => {
        const li = document.createElement("li");
        li.classList.add("acc-set-li");
        li.dataset.setIdx = idx;
        const setNameTextNode = document.createTextNode(set.setName);
        li.append(setNameTextNode);
        dom.els.allSets_d_ul.append(li);
    });
}
