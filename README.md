# `accounts`

This website, for double entry bookkeeping, is entirely written in JavaScript. No user, or other, data leaves the device except if the user chooses to send it for example by email to themselves or anyone else. User data is easily extracted in `CSV` format either by downloading it as a file or copying it to the clipboard of the device or sending it by email to chosen addresses using the default email client for the device. The `CSV` can then be imported into spreadsheet software.

## The Code

The code uses a [JavaScript module](https://github.com/stevespages/dom/) called `dom` for accessing elements in the DOM and for helping to organize the code.

The `setOfAccs` array can have any number sets of accounts. Each one is referred to as a `set` within the code base. Each `set` is an JavaScript object and is an element of the `setsOfAccs` array. The `setsOfAccs` array is saved to the `localStorage` on the device which is allocated for the website. It is resaved every time a change is made to it. Consequently changes are not lost even if the browser is closed down during use.

As the user data resides solely on the device where it is used and is not in the cloud it is recommended to back it up by emailing the data to yourself as `CSV`. This is easily done when using the website.

Account names will be enforced as unique although they can be changed by the user. Account names may not differ only by capitalization. Thus "Bank" and "bank" may not both be used as account names.

New accounts are objects pushed to the `set.accs` array. These array elements must never be deleted but they will have a `status` property which can be set to `active` or `deleted`. This enables accounts to be deleted and reinstated. If an account is deleted any transactions it is part of will be assigned to the `unbalanced` account. Should the account be reinstated the transactions will be restored to it and removed from `unbalanced`.

`set.accs[0]` is an account called `unbalanced. It can not be directly changed by the user. It balances the otherwise unbalanced transactions. If the books are balanced it should have a value of zero.

In the code below for `setsOfAccs`, a single set of accounts called "Steve Greig" can be seen. It contains three accounts: `unbalanced` which can not be removed or directly modified by the user, "Bank" and "cash". A transaction was entered at the time indicated by the timestamp with a date given for the transaction itself and an array called `accsAndAmounts` which records the index of accounts involved in the transaction as keys with the amount for that accounts recorded as the value.

It can be seen that `accs[0]`, which is the `unbalanced` account, has an empty `txns` array. This is because there are no unbalanced transactions.

`accs[1]`, which is the "Bank" account, has one element, with a value of 0, in its `txns` array. This indicates it is involved in the transaction indicated by `set.txns[0]`.

`accs[2]`, which is the "cash" account, also has one element, with a value of 0, in its `txns` array. This is because it is also a participant in the transaction indicated by `set.txns[0]`.

`set.txns[0]` is an object describing a single transaction. It indicates that `accs[1]` was debited with £100.00 and `accs[2]` was credited with £100.00. In other words £100.00 was withdrawn from "Bank" and therefore "cash" increased by £100.00.

```
setsOfAccs = [
    {
        nameOfAcc: "Steve Greig",
        startDay: 1,
        startMonth: 4,
        endDay: 31,
        endMonth: 3,
        accs: [
            {
                accName: "unbalanced",
                status: "active",
                txns: [],
            },
            {
                accName: "Bank",
                status: "active",
                txns: [0]
            },
            {
                accName: "cash",
                status: "active",
                txns: [0]
            },
        ],
        txns: [
            {
                timestamp: 1743432091
                date: <YYYY-MM-DD>
                description: <blah blah>
                accsAndAmounts: [
                    1: -100.00,
                    2: +100.00,
                ]
            },
        ],
    }
]
```

## divs

* `addAcc_d`

* `addNewSet_d`

* `all-sets_div`

    landing div for the web app. Has a list of the user's sets of accounts and a "new set" button.

* `importCsv_d`

* `set_d`

    landing div for an individual set of accounts. Shows a list of the accounts in the set. A text input allows filtering. Clicking on an account name causes the name of the account to appear above the list with an input box next to it for entering an amount. The amount entered but with opposite sign appears as the user types. Clicking on another account brings this to the top with an input box for the user to enter an amount. Any number of accounts can be involved. The transaction is recorded in the `txns` array after OK btn clicked.

* `all-txns_div`

    Every transaction in the set of accounts will be shown in chronological order which is their order in the `txns` array.
