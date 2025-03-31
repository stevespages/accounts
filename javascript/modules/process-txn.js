export function processTxn(dom) {
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    const setIdx = dom.els.set_d_h1.dataset.setIdx;
    const txn = {};
    const accIdxs = [];
    let unbalancedAmount = 0;
    const accAmountInps = document.querySelectorAll(".acc-amount-inp");
    Array.from(accAmountInps).forEach(inp => {
        txn[inp.dataset.accIdx] = Number(inp.value);
        unbalancedAmount += Number(inp.value);
        accIdxs.push(inp.dataset.accIdx);
    })
    if (unbalancedAmount !== 0) {
        txn[0] = unbalancedAmount;

    }
    setsOfAccs
    const txnsLength = setsOfAccs[setIdx].txns.push(txn);
    accIdxs.forEach(idx => {
        setsOfAccs[setIdx].accs[idx].txns.push(txnsLength - 1);
        if (unbalancedAmount !== 0) {
            setsOfAccs[setIdx].accs[0].txns.push(txnsLength - 1);
        }
    });
    localStorage.setItem("setsOfAccs", JSON.stringify(setsOfAccs))
}
