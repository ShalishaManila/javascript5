// *********** FUNCTIONS ****************
// Function to display balance
function getBalance() {
    console.log("Account Balance:", bankaccount.balance);
}

// Function to deposit amount
function deposit(amount) {
    bankaccount.balance += amount;
    console.log("Deposited amount", amount);
    getBalance();
}

// Function to withdraw amount
function withdraw(amount) {
    if (amount > bankaccount.balance) {
        accountError("Not enough funds in account!!!");
        //console.log("Not enough funds");
    } else {
        bankaccount.balance = bankaccount.balance - amount;
        console.log("Withdraw ", amount, " Successful.");
        getBalance();
    }
}

// Function to display account name
function getAccountName() {
    console.log("Account Name:", bankaccount.name);
}

// Function to display error message
function accountError(errMessage) {
    console.log("Error !!", errMessage);
    alert(`Error!!!\n${errMessage}`);
}

// Function to exit amt function
function exitAccount() {
    return true;
}

// ATM function
function atm() {
    let exitatm = false;
    while (!exitatm) {
        const message = parseFloat(
            prompt(
                "Select a choice: \n 1) Check balance \n 2) Make a deposit \n 3) Make a withdrawl \n 4) Get account name \n 5) Exit"
            )
        );
        switch (message) {
            case 1:
                // console.log("inside case 1");
                getBalance();
                break;
            case 2:
                // console.log("inside case 2");
                let depositAmount = prompt("Enter amount to deposit:");
                if (!isNaN(depositAmount)) {
                    deposit(parseFloat(depositAmount));
                } else {
                    accountError("Enter amount to deposit in Numeric!!!");
                }
                break;
            case 3:
                // console.log("inside case 3");
                let withdrawAmount = prompt("Enter amount to withdraw:");
                if (!isNaN(withdrawAmount)) {
                    withdraw(parseFloat(withdrawAmount));
                } else {
                    accountError("Enter amount to withdraw in Numeric!!!");
                }
                break;
            case 4:
                // console.log("inside case 4");
                getAccountName();
                break;
            case 5:
                // console.log("inside case 5");
                console.log("Exiting!!!");
                exitatm = exitAccount();
                break;
            default:
                // console.log("inside default");
                accountError("Enter correct choice (1-5) !!!");
                break;
        }
    }
}


// *********** Main ****************
// setting name and minimum balace for the account
let bankaccount = { name: "MyName", balance: 10 };

// calling ATM function
atm();


