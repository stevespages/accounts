export function assignActiveSetIdx(setIdx) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.activeSetIdx = setIdx;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
