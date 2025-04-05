export function createTxnsFromCsv(lookUpColTable) {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const temporaryCsv = accounts.temporaryCsv;
    const setIdx = accounts.activeSetIdx;
    const set = accounts.sets[setIdx];
    const txns = set.txns;
   temporaryCsv.forEach((row, rowIdx) => {
        if (rowIdx === 0) {
            return;
        }
        const txn = {
            accsAndAmounts: {},
        }
        const accIdxsInTxn = [];
        let unbalancedAmount = 0;
        row.forEach((cell, colIdx) => {
            if (lookUpColTable[colIdx]) {
                if (lookUpColTable[colIdx] === "date") {
                    txn.date = cell;
                }
                if (lookUpColTable[colIdx] === "description") {
                    txn.description = cell;
                }
                if (typeof lookUpColTable[colIdx] === "number") {
                    txn.accsAndAmounts[lookUpColTable[colIdx]] = Number(cell);
                    accIdxsInTxn.push(lookUpColTable[colIdx]);
                    unbalancedAmount += Number(cell);
                }
            }
        })
        console.log(unbalancedAmount);
        if (unbalancedAmount !== 0) {
            txn.accsAndAmounts[0] = (unbalancedAmount * -1)
        }
        // push() returns the length of the array so the index of the added
        // element is the length - 1
        const txnIdx = txns.push(txn) - 1;
        accIdxsInTxn.forEach(accIdx => {
            console.log("txnIdx", txnIdx)
            set.accs[accIdx].txns.push(txnIdx);
        })
        if (unbalancedAmount !== 0) {
            set.accs[0].txns.push(txnIdx);
        }
    })
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
