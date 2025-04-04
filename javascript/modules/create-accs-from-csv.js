export function createAccsFromCsv(dom, addNewAcc) {
    const newHeadingInps = document.querySelectorAll(".import-csv-heading-inp");
    Array.from(newHeadingInps).forEach(inp => {
        if (
            !inp.classList.contains("inactive") &&
            inp.classList.contains("acc-new")
        ) {
                addNewAcc(inp.value);
        }
    })
}
