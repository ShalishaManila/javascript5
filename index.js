// Function to display error message
function accountError(errMessage) {
    console.log("Error !!", errMessage);
    alert(`Error!!!\n${errMessage}`);
}

// *********** Main ****************
// Bankaccount object
let bankaccount = {
    name: "MyName",
    balance: 10,
    deposit: function (amount) {
        this.balance += amount;
        console.log(`Amount ${amount} deposited successfully.`);
    },
    withdraw: function (amount) {
        if (amount > this.balance) {
            accountError("Not enough balance in your account!!!");
        } else {
            this.balance -= amount;
            console.log(`Amount ${amount} withdraw successfully.`);
        }
    },
    getBalance: function () {
        console.log("Account Balance:", this.balance.toFixed(2));
    },
    getAccountName: function () {
        console.log("Account Name:", this.name);
    },
    exitAccount: function () {
        return true;
    },
    atm: function () {
        let exitatm = false;
        while (!exitatm) {
            const message = parseFloat(
                prompt(
                    "Select a choice: \n 1) Check balance \n 2) Make a deposit \n 3) Make a withdrawl \n 4) Get account name \n 5) Exit"
                )
            );
            switch (message) {
                case 1:
                    this.getBalance();
                    break;
                case 2:
                    let depositAmount = prompt("Enter amount to deposit:");
                    if (!isNaN(depositAmount)) {
                        this.deposit(parseFloat(depositAmount));
                        this.getBalance();
                    } else {
                        accountError("Enter amount to deposit in Numeric!!!");
                    }
                    break;
                case 3:
                    let withdrawAmount = prompt("Enter amount to withdraw:");
                    if (!isNaN(withdrawAmount)) {
                        this.withdraw(parseFloat(withdrawAmount));
                        this.getBalance();
                    } else {
                        accountError("Enter amount to withdraw in Numeric!!!");
                    }
                    break;
                case 4:
                    this.getAccountName();
                    break;
                case 5:
                    console.log("Exiting ATM Function!!!");
                    exitatm = this.exitAccount();
                    break;
                default:
                    accountError("Enter correct choice (1-5) !!!");
                    break;
            }
        }
    }
};

bankaccount.atm();

