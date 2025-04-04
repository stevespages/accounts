export function addCsvInpClasses(inpEl, accNameExists) {
    inpEl.classList.remove("date", "description", "acc-exists", "acc-new");
    if (inpEl.value.toLowerCase() === "date") {
        inpEl.classList.add("date");
        return;
    }
    if (inpEl.value.toLowerCase() === ("description")) {
        inpEl.classList.add("description");
        return;
    }

    if (accNameExists(inpEl.value)) {
        inpEl.classList.add("acc-exists");
        return;
    } else {
        inpEl.classList.add("acc-new");
        return;
    }
}
