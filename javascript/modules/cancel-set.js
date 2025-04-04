export function cancelSet() {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.activeSetIdx = null;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
