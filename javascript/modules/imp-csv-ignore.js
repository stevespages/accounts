export function impCsvIgnore(ignoreBtn) {
    const label = ignoreBtn.parentElement.previousSibling.firstChild;
    const inp = label.firstElementChild;
    if (ignoreBtn.innerHTML === "ignore") {
        ignoreBtn.innerHTML = "include";
        label.classList.add("inactive");
        inp.classList.add("inactive");
        inp.disabled = true;
    } else {
        ignoreBtn.innerHTML = "ignore";
        label.classList.remove("inactive");
        inp.classList.remove("inactive");
        inp.disabled = false;
    }
}
