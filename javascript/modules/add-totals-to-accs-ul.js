export function addTotalsToAccsUl(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const set = accounts.sets[setIdx];
    const accTotalSpans = 
        Array.from(document.querySelectorAll(".acc-total-span"));

    set.accs.forEach((acc, accIdx) => {
        let accTotal = 0;
 
        acc.txns.forEach(txnIdx => {
            console.log("txnIdx", txnIdx)
            accTotal += Number(set.txns[txnIdx.toString()].accsAndAmounts[accIdx]);
            console.log("accTotal", accTotal)
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
