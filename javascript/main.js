import { addAccToTxnUl } from "./modules/add-acc-to-txn-ul.js";
import { addDataToH1 } from "./modules/add-data-to-h1.js";
import { addNewAcc } from "./modules/add-new-acc.js";
import { addNewSet } from "./modules/add-new-set.js";
import { addTotalsToAccsUl } from "./modules/add-totals-to-accs-ul.js";
import { cancelTxn } from "./modules/cancel-txn.js";
import { dom } from "./modules/dom.js";
import { hideFilteredAccLis } from "./modules/hide-filtered-acc-lis.js";
import { makeListOfAllSets } from "./modules/make-list-of-all-sets.js";
import { populateAccsUl } from "./modules/populate-accs-ul.js";
import { processTxn } from "./modules/process-txn.js";

dom.createElVars();
dom.consoleLogEls();

if (!localStorage.getItem("setsOfAccs")) {
    localStorage.setItem("setsOfAccs", JSON.stringify([]));
}

makeListOfAllSets(dom);

dom.showDiv(["allSets_d"]);

const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));

dom.els.addAcc_d.addEventListener("click", event => {
    if (event.target.id === "add-acc_d-cancel_btn") {
        dom.showDiv(["set_d"]);
    }
    if (event.target.id === "add-acc_d-ok_btn") {
        addNewAcc(dom);
        populateAccsUl(dom);
        dom.showDiv(["set_d"]);
    }
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
        addDataToH1(dom, event.target.dataset.setIdx);
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

dom.els.importCsv_d.addEventListener("click", (event) => {
    if (event.target.id === "import-csv_d-cancel_btn") {
        dom.els.importCsv_dUploadCsv_inp.value = "";
        dom.showDiv(["set_d"]);
    }
})

dom.els.importCsv_dUploadCsv_inp.addEventListener("change", () => {
    const file = dom.els.importCsv_dUploadCsv_inp.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploadedCsv = reader.result;
        console.log(uploadedCsv);
        console.log("setIdx", dom.els.set_d_h1.dataset.setIdx);
    });
    reader.readAsText(file);
});

dom.els.set_d.addEventListener("click", event => {
    if (
            event.target.classList.contains("acc-name-span") && 
            !event.target.classList.contains("inactive")
    ) {
        event.target.classList.add("inactive");
        addAccToTxnUl(dom, event.target.dataset.accIdx);
    }
    if (event.target.id === "set_d-add-acc_btn") {
        dom.els.addAcc_dAccName_inp.value = "";
        dom.showDiv(["addAcc_d"]);
    }
    if (event.target.id === "set_d-cancel_btn") {
        dom.showDiv(["allSets_d"]);
    }
    if (event.target.id === "set_d-cancel-txn_btn") {
        cancelTxn(dom);
    }
    if (event.target.id === "set_d-import-csv_btn") {
        dom.showDiv(["importCsv_d"]);
    }
    if (event.target.id === "set_d-ok-txn_btn") {
        processTxn(dom);
        addTotalsToAccsUl(dom);
        cancelTxn(dom);
    }
})

dom.els.set_dFilterAccs_inp.addEventListener("input", event => {
    hideFilteredAccLis(event.target.value);
    console.log(event.target.value);
})
