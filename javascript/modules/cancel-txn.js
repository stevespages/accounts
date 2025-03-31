export function cancelTxn(dom) {
    dom.els.set_dTxn_ul.classList.add("hide");
    const txnAccLis = document.querySelectorAll(".txn-acc-li");
    Array.from(txnAccLis).forEach(li => {
        li.remove();
    });
    dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = "";
    const accNameSpans = document.querySelectorAll(".acc-name-span");
    Array.from(accNameSpans).forEach(span => {
        span.classList.remove("inactive");
    });
    accNameSpans[0].classList.add("inactive");
}
