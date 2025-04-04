export function reallyDeleteSetMssg(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const setName = accounts.sets[setIdx].setName;
    const message = "Really delete " + setName + "?";
    const messageTextNode = document.createTextNode(message);
    dom.els.deleteSet_dReallyDelete_p.innerHTML = "";
    dom.els.deleteSet_dReallyDelete_p.append(messageTextNode);
}
