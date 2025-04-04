function getBalance() {

    console.log("Account Balance:", bankaccount.balance);
}

function getAccountName() {
    console.log("Account Name:", bankaccount.name);
}

function accountError(errMessage) {
    console.log("Error !!", errMessage);
}

function deposit(amount) {
    bankaccount.balance += amount;
    console.log("Deposited amount", amount);
    getBalance();
}

function exitAccount() {
    return true;
}

function withdraw(amount) {
    if (amount > bankaccount.balance) {
        accountError("Not enough funds in account!");
        //console.log("Not enough funds");
    } else {
        bankaccount.balance = bankaccount.balance - amount;
        console.log("Withdraw ", amount, " Successful");
        getBalance();
    }
}


function atm() {
    let exitatm = false;
    while (!exitatm) {
        const message = parseFloat(
            prompt(
                "select a choice 1.) see balance 2.) Make a deposit 3.) Make a withdrawl 4.) get account name 5.) Exit"
            )
        );
        console.log("Entered Choice: ", message);
        switch (message) {
            case 1:
                // console.log("inside case 1");
                getBalance();
                break;
            case 2:
                // console.log("inside case 2");
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (depositAmount) {
                    deposit(depositAmount);
                } else {
                    accountError("Enter correct amount to deposit!");
                }
                break;
            case 3:
                // console.log("inside case 3");
                let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                if (withdrawAmount) {
                    withdraw(withdrawAmount);
                } else {
                    accountError("Enter correct amount to withdraw!");
                }
                break;
            case 4:
                // console.log("inside case 4");
                getAccountName();
                break;
            case 5:
                // console.log("inside case 5");
                exitatm= exitAccount();
                break;
            default:
                // console.log("inside default");
                break;
        }
    }
}


let bankaccount = { name: "MyName", balance: 600 };

atm();

