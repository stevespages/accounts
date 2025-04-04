export function saveImportedCsv(csvFile, dom) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploadedCsv = reader.result;
        const csvArr = [];
        uploadedCsv.split(/\r?\n/).forEach(line => {
            if (line.split(",").length > 1) {
                csvArr.push(line.split(","));
            }
        });
        const accounts = JSON.parse(localStorage.getItem("accounts"));
        accounts.temporaryCsv = csvArr;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        dom.els.importCsv_dShowCsv_btn.classList.remove("hide");
    });
    reader.readAsText(csvFile);
}
