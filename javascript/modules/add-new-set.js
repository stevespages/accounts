export function addNewSet(dom) {
    const set = {};

    // Validate the name eg not empty string etc.
    set.setName = dom.els.addNewSet_dSetName_inp.value;

    // Hard code accing period dates for now.
    // Months are not zero indexed for now.
    set.startDay = 1;
    set.startMonth = 4;
    set.endDay = 31;
    set.endMonth = 3;

    set.accs = [
        {
            accName: "unbalanced",
            status: "active",
            txns: [],
        },
    ];
    set.txns = [];

    const setsOfAccs = JSON.parse(localStorage.getItem("setsOfAccs"));
    
    setsOfAccs.push(set);

    localStorage.setItem("setsOfAccs", JSON.stringify(setsOfAccs));
}
