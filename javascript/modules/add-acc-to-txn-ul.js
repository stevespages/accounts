export function addAccToTxnUl(dom, accIdx) {
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    const setIdx = dom.els.set_d_h1.dataset.setIdx;
    const set = setsOfAccs[setIdx];
    const accNameSpan = document.createElement("span");
    const accName = set.accs[accIdx].accName;
    const accNameTextNode = document.createTextNode(accName);
    accNameSpan.append(accNameTextNode);
    const accAmountInp = document.createElement("input");
    accAmountInp.classList.add("acc-amount-inp");
    accAmountInp.dataset.accIdx = accIdx;
    accAmountInp.addEventListener("input", event => {
        if (event.target.value === "-") {
            return;
        }
        if (isNaN(event.target.value)) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = "???";
            return;
        }
        const totalAmount = sumAccAmountInps(dom);
        if (totalAmount === 0) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = "";
        } else {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = (totalAmount * -1);
        }
    })
    const li = document.createElement("li");
    li.classList.add("txn-acc-li");
    li.append(accNameSpan, accAmountInp);
    dom.els.set_dTxn_ul.append(li);
}

function sumAccAmountInps(dom) {
    const accAmountInps = document.querySelectorAll(".acc-amount-inp");
    let totalAmount = 0;
    Array.from(accAmountInps).forEach(inp => {
        const inpAmount = Number(inp.value);
        totalAmount += inpAmount;
    });
    return (parseInt(totalAmount * 100) / 100);
}
