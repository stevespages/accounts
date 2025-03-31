export function addAccToTxnUl(dom, accIdx) {
    dom.els.set_dTxn_ul.classList.remove("hide");
    dom.els.set_dTxn_ulDate_li_inp.value = getDateToday();
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
            event.target.classList.add("negative");
            return;
        }
        if (event.target.value[0] !== "-") {
            event.target.classList.remove("negative");
        }
        if (isNaN(event.target.value)) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = "???";
            return;
        }
        const totalAmount = sumAccAmountInps(dom);
        if (totalAmount === 0) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = "";
        }
        if (totalAmount > 0) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = (totalAmount * -1);
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.classList.add("negative");
        }
        if (totalAmount < 0) {
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.innerHTML = (totalAmount * -1);
            dom.els.set_dTxn_ulUnbalancedAmount_li_span.classList.remove("negative");
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

function getDateToday() {
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hrs = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (day < 10) {
        day = "0" + day;
    }
    month = month + 1;
    if (month < 10) {
        month = "0" + month;
    }
    const dateToday = year + "-" + month + "-" + day;
    const timeNow = hrs + ":" + min;
    const dateInp = document.createElement("input");
    return dateToday;
}