export function createImportDialog(dom, addCsvInpClasses, accNameExists) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const csvArr = accounts.temporaryCsv;
    csvArr[0].forEach((heading, headingIdx) => {
        const label = document.createElement("label");
        const headingTextNode = document.createTextNode(heading);
        label.append(headingTextNode);
        const headingInp = document.createElement("input");
        headingInp.dataset.headingIdx = headingIdx;
        headingInp.classList.add("import-csv-heading-inp");
        headingInp.value = heading;
        addCsvInpClasses(headingInp, accNameExists);
        /*
        if (heading.toLowerCase() === "date") {
            headingInp.classList.add("date");
        }
        if (heading.toLowerCase() === "description") {
            headingInp.classList.add("description");
        }
        */
        label.append(headingInp);
        const dt = document.createElement("dt");
        dt.append(label);
        const dd = document.createElement("dd");
        const viewBtn = document.createElement("button");
        viewBtn.dataset.headingIdx = headingIdx;
        viewBtn.classList.add("import-csv-heading-view-btn");
        viewBtn.innerHTML = "view";
        const ignoreBtn = document.createElement("button");
        ignoreBtn.dataset.headingIdx = headingIdx;
        ignoreBtn.classList.add("import-csv-heading-ignore-btn");
        ignoreBtn.innerHTML = "ignore";
        dd.append(viewBtn, ignoreBtn);
        dom.els.importCsv_dHeadings_dl.append(dt, dd);
        console.log("heading", heading)
    })
    dom.els.importCsv_dImportCsv_btn.classList.remove("hide");

}
