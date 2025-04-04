export function processTxn(dom) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const setIdx = accounts.activeSetIdx;
    const txn = {
        accsAndAmounts: {},
    };
    txn.timestamp = Date.now();
    txn.date = dom.els.set_dTxn_ulDate_li_inp.value;
    txn.description = dom.els.set_dTxn_ulDescription_li_inp.value;
    const accIdxs = [];
    let unbalancedAmount = 0;
    const accAmountInps = document.querySelectorAll(".acc-amount-inp");
    Array.from(accAmountInps).forEach(inp => {
        if (Number(inp.value) !== 0) {
            txn.accsAndAmounts[inp.dataset.accIdx] = Number(inp.value);
            unbalancedAmount += Number(inp.value);
            accIdxs.push(inp.dataset.accIdx);
        }
    })
    if (unbalancedAmount) {
        if (unbalancedAmount !== 0) {
            txn.accsAndAmounts[0] = unbalancedAmount;

        }
    }
    const txnsLength = accounts.sets[setIdx].txns.push(txn);
    accIdxs.forEach(idx => {
        accounts.sets[setIdx].accs[idx].txns.push(txnsLength - 1);
        if (unbalancedAmount !== 0) {
            accounts.sets[setIdx].accs[0].txns.push(txnsLength - 1);
        }
    });
    localStorage.setItem("accounts", JSON.stringify(accounts))
}
