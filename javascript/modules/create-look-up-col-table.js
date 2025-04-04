export function createLookUpColTable(accNameToAccIdx) {
    const lookUpColTable = {};
    const newHeadingInps = document.querySelectorAll(".import-csv-heading-inp");
    Array.from(newHeadingInps).forEach((inp, colIdx) => {
        if (inp.classList.contains("inactive")) {
            lookUpColTable[colIdx] = null;
            return;
        }
        if (inp.classList.contains("date")) {
            lookUpColTable[colIdx] = "date";
            return;
        }
        if (inp.classList.contains("description")) {
            lookUpColTable[colIdx] = "description";
            return;
        }
        if (
            inp.classList.contains("acc-exists") ||
            inp.classList.contains("acc-new")
        ) {
            console.log("from createLookUpColTable", accNameToAccIdx(inp.value.toLowerCase()))
            lookUpColTable[colIdx] = accNameToAccIdx(inp.value.toLowerCase());
            return;
        }
    });
    return lookUpColTable;
}
