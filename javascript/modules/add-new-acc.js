export function addNewAcc(accName) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const newAcc = {};
    newAcc.accName = accName;
    newAcc.status = "active";
    newAcc.txns = [];
    accounts.sets[setIdx].accs.push(newAcc);
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
