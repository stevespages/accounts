import { addAccToTxnUl } from "./modules/add-acc-to-txn-ul.js";
import { addCsvInpClasses } from "./modules/add-csv-inp-classes.js";
import { addNewAcc } from "./modules/add-new-acc.js";
import { addNewSet } from "./modules/add-new-set.js";
import { addTotalsToAccsUl } from "./modules/add-totals-to-accs-ul.js";
import { accNameExists } from "./modules/acc-name-exists.js";
import { accNameToAccIdx } from "./modules/acc-name-to-acc-idx.js";
import { appendToSet_d_h1 } from "./modules/append-to-set_d_h1.js";
import { assignActiveSetIdx } from "./modules/assign-active-set-idx.js";
import { cancelSet } from "./modules/cancel-set.js";
import { cancelTxn } from "./modules/cancel-txn.js";
import { createAccsFromCsv } from "./modules/create-accs-from-csv.js";
import { createImportDialog } from "./modules/create-import-dialog.js";
import { createLookUpColTable } from "./modules/create-look-up-col-table.js";
import { createTxnsFromCsv } from "./modules/create-txns-from-csv.js";
import { deleteSet } from "./modules/delete-set.js";
import { deleteTemporaryCsv } from "./modules/delete-temporary-csv.js";
import { dom } from "./modules/dom.js";
import { hideFilteredAccLis } from "./modules/hide-filtered-acc-lis.js";
import { impCsvIgnore } from "./modules/imp-csv-ignore.js";
import { isValidAccName } from "./modules/is-valid-acc-name.js";
import { makeListOfAllSets } from "./modules/make-list-of-all-sets.js";
import { reallyDeleteSetMssg } from "./modules/really-delete-set-mssg.js";
import { saveImportedCsv } from "./modules/save-imported-csv.js";
import { populateAccsUl } from "./modules/populate-accs-ul.js";
import { processTxn } from "./modules/process-txn.js";

dom.createElVars();
dom.consoleLogEls();

if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(
        {
            activeSetIdx: null,
            sets: [],
            temporaryCsv: null,
        }
    ));
}

console.log("accounts", JSON.parse(localStorage.getItem("accounts")));

cancelSet();
deleteTemporaryCsv();
makeListOfAllSets(dom);

dom.showDiv(["allSets_d"]);

dom.els.addAcc_d.addEventListener("click", event => {
    if (event.target.id === "add-acc_d-cancel_btn") {
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "add-acc_d-ok_btn") {
        const putativeAccName = dom.els.addAcc_dAccName_inp.value;
        if (!accNameExists(putativeAccName) &&
            !["date", "description"].includes(putativeAccName.toLowerCase)){
            if (isValidAccName(putativeAccName)) {
                addNewAcc(putativeAccName);
                populateAccsUl(dom);
                addTotalsToAccsUl(dom);
                dom.showDiv(["set_d"]);
            }
        }
    }
})

dom.els.addAcc_dAccName_inp.addEventListener("input", event => {
        addCsvInpClasses(event.target, accNameExists);
})

dom.els.addNewSet_d.addEventListener("click", event => {
    if (event.target.id === "add-new-set_d-cancel_btn") {
        dom.showDiv(["allSets_d"]);
    }
    if (event.target.id === "add-new-set_d-ok_btn") {
        addNewSet(dom);
        makeListOfAllSets(dom);
        dom.showDiv(["allSets_d"]);
    }
})

dom.els.allSets_d.addEventListener("click", event => {
    if (event.target.classList.contains("acc-set-li")) {
        assignActiveSetIdx(event.target.dataset.setIdx);
        appendToSet_d_h1(dom);
        populateAccsUl(dom);
        addTotalsToAccsUl(dom);
        cancelTxn(dom);
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "all-sets_d-new-set_btn") {
        dom.els.addNewSet_dSetName_inp.value = "";
        dom.showDiv(["addNewSet_d"]);
    }
})

dom.els.deleteSet_d.addEventListener("click", event => {
    if (event.target.id === "delete-set_d-cancel_btn") {
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "delete-set_d-ok_btn") {
        deleteSet();
        cancelSet();
        makeListOfAllSets(dom);
        dom.showDiv(["allSets_d"])
    }
})

dom.els.importCsv_d.addEventListener("click", (event) => {
    if (event.target.classList.contains("import-csv-heading-ignore-btn")) {
        impCsvIgnore(event.target);
    }
    if (event.target.classList.contains("import-csv-heading-view-btn")) {

    }
    if (event.target.id === "import-csv_d-cancel_btn") {
        dom.els.importCsv_dUploadCsv_inp.value = "";
        dom.els.importCsv_dHeadings_dl.innerHTML = "";
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "import-csv_d-import-csv_btn") {
        createAccsFromCsv(dom, addNewAcc);
        const lookUpColTable = createLookUpColTable(accNameToAccIdx);
        console.log("lookUpColTable", lookUpColTable)
        createTxnsFromCsv(lookUpColTable);
        populateAccsUl(dom);
        addTotalsToAccsUl(dom);
        cancelTxn(dom);
        dom.showDiv(["set_d"]);
    }

    if (event.target.id === "import-csv_d-show-csv_btn") {
        event.target.classList.add("hide");
        createImportDialog(dom, addCsvInpClasses, accNameExists);
    }
})

dom.els.importCsv_dHeadings_dl.addEventListener("input", event => {
    addCsvInpClasses(event.target, accNameExists);
});

dom.els.importCsv_dUploadCsv_inp.addEventListener("change", () => {
    saveImportedCsv(dom.els.importCsv_dUploadCsv_inp.files[0], dom);
});

dom.els.set_d.addEventListener("click", event => {
    if (
            event.target.classList.contains("acc-name-span") && 
            !event.target.classList.contains("inactive")
    ) {
        event.target.classList.add("inactive");
        addAccToTxnUl(dom, event.target.dataset.accIdx);
    }
    if (event.target.id === "set_d-cancel-txn_btn") {
        cancelTxn(dom);
    }
    if (event.target.id === "set_d-ok-txn_btn") {
        processTxn(dom);
        addTotalsToAccsUl(dom);
        cancelTxn(dom);
    }
    if (event.target.id === "set_d-menu_btn") {
        dom.showDiv(["setMenu_d"])
    }
})

dom.els.setMenu_d.addEventListener("click", event => {
    if (event.target.id === "set-menu_d-add-acc_btn") {
        dom.els.addAcc_dAccName_inp.value = "";
        dom.showDiv(["addAcc_d"]);
    }
    if (event.target.id === "set-menu_d-cancel_btn") {
        cancelSet();
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "set-menu_d-delete_btn") {
        reallyDeleteSetMssg(dom);
        dom.showDiv(["deleteSet_d"])
    }
    if (event.target.id === "set-menu_d-import-csv_btn") {
        dom.els.importCsv_dImportCsv_btn.classList.add("hide");
        dom.els.importCsv_dHeadings_dl.innerHTML = "";
        dom.showDiv(["importCsv_d"]);
    }
});

dom.els.set_dFilterAccs_inp.addEventListener("input", event => {
    hideFilteredAccLis(event.target.value);
    console.log(event.target.value);
})
