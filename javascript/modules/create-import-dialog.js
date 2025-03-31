export function createImportDialog(dom, uploadedCsv) {
    //const uploadedCsv = reader.result;
    const csvArr = uploadedCsv.split(/\r?\n/);
    csvArr[0].split(",").forEach((heading, headingIdx) => {
        const headingInp = document.createElement("input");
        headingInp.dataset.headingIdx = headingIdx;
        headingInp.classList.add("import-csv-heading-inp");
        headingInp.value = heading;
        const dt = document.createElement("dt");
        dt.append(headingInp);
        const dd = document.createElement("dd");
        const okBtn = document.createElement("button");
        okBtn.dataset.headingIdx = headingIdx;
        okBtn.classList.add("import-csv-heading-ok-btn");
        okBtn.innerHTML = "ok";
        const viewBtn = document.createElement("button");
        viewBtn.dataset.headingIdx = headingIdx;
        viewBtn.classList.add("import-csv-heading-view-btn");
        viewBtn.innerHTML = "view";
        const ignoreBtn = document.createElement("button");
        ignoreBtn.dataset.headingIdx = headingIdx;
        ignoreBtn.classList.add("import-csv-heading-ignore-btn");
        ignoreBtn.innerHTML = "ignore";
        dd.append(okBtn, viewBtn, ignoreBtn);
        dom.els.importCsv_dHeadings_dl.append(dt, dd);
        console.log("heading", heading)
    })
    console.log(uploadedCsv.split(/\r?\n/));
    console.log("setIdx", dom.els.set_d_h1.dataset.setIdx);
}
