export function accNameExists(putativeAccName) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const accNames = [];
    accounts.sets[setIdx].accs.forEach(acc => {
        accNames.push(acc.accName);
    })
    if (accNames.indexOf(putativeAccName) > -1) {
        return true;
    } else {
        return false;
    }
}
