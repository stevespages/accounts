export function accNameToAccIdx(accName) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const set = accounts.sets[setIdx];
    let accIdx;
    // a different type of loop would allow jumping out once accIdx is found
    set.accs.forEach((acc, idx) => {
        if (acc.accName.toLowerCase() === accName.toLowerCase()) {
            accIdx = idx;
        }
    })
    return accIdx;
}
