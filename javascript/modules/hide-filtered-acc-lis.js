export function hideFilteredAccLis(filterText) {
    const accLis = document.querySelectorAll(".acc-li");
    Array.from(accLis).forEach(li => {
        li.classList.remove("hide");
    })
    if (filterText === "") {
        return;
    }
    Array.from(accLis).forEach(li => {
        li.classList.add("hide");
        const accNameSubstr = li.innerText.substring(0, filterText.length);
        if (accNameSubstr.toLowerCase() === filterText.toLowerCase()) {
            li.classList.remove("hide");
        }
    })
}
