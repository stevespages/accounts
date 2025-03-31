export function cancelTxn(dom) {
    const txnAccLis = document.querySelectorAll(".txn-acc-li");
    Array.from(txnAccLis).forEach(li => {
        li.remove();
    });
    const accNameSpans = document.querySelectorAll(".acc-name-span");
    Array.from(accNameSpans).forEach(span => {
        span.classList.remove("inactive");
    });
    accNameSpans[0].classList.add("inactive");
}
