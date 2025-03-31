export function addNewAcc(dom) {
    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    //const set = setsOfAccs[setIdx];
    const newAcc = {};
    newAcc.accName = dom.els.addAcc_dAccName_inp.value;
    newAcc.status = "active";
    newAcc.txns = [];
    setsOfAccs[dom.els.set_d_h1.dataset.setIdx].accs.push(newAcc);
    localStorage.setItem("setsOfAccs", JSON.stringify(setsOfAccs));
}
