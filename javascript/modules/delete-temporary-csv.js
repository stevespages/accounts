export function deleteTemporaryCsv() {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.temporaryCsv = null;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
