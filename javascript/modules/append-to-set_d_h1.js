export function appendToSet_d_h1(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const setName = accounts.sets[setIdx].setName;
    const setNameTextNode = document.createTextNode(setName);
    dom.els.set_d_h1.innerHTML = "";
    dom.els.set_d_h1.append(setNameTextNode);
}
