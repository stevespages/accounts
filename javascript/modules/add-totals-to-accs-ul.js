export function addTotalsToAccsUl(dom) {
    const setIdx = dom.els.set_d_h1.dataset.setIdx;
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    const set = setsOfAccs[setIdx];
    const accTotalSpans = 
        Array.from(document.querySelectorAll(".acc-total-span"));

    set.accs.forEach((acc, accIdx) => {
        let accTotal = 0;
 
        acc.txns.forEach(txnIdx => {
            accTotal += set.txns[txnIdx][accIdx]
        })
        accTotalSpans[accIdx].innerHTML = accTotal;
        if (accTotal >= 0) {
            accTotalSpans[accIdx].classList.remove("negative");
        } else {
            accTotalSpans[accIdx].classList.add("negative");
        }
        console.log(acc.accName);
    })
}
