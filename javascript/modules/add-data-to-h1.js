export function addDataToH1(dom, setIdx) {
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    const setName = setsOfAccs[setIdx].setName;
    const setNameTextNode = document.createTextNode(setName);
    dom.els.set_d_h1.innerHTML = "";
    dom.els.set_d_h1.append(setNameTextNode);
    dom.els.set_d_h1.dataset.setIdx = setIdx;
}
