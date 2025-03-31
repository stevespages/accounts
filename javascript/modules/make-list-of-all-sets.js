export function makeListOfAllSets(dom) {
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    dom.els.allSets_d_ul.innerHTML = "";
    setsOfAccs.forEach((set, idx) => {
        const li = document.createElement("li");
        li.classList.add("acc-set-li");
        li.dataset.setIdx = idx;
        const setNameTextNode = document.createTextNode(set.setName);
        li.append(setNameTextNode);
        dom.els.allSets_d_ul.append(li);
    });
}
