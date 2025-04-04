export function deleteSet() {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    accounts.sets.splice(setIdx, 1);
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
