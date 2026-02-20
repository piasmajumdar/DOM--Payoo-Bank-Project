document.getElementById('cashout-btn').addEventListener('click', function (){
    //1- get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');

    if(cashoutNumber.length != 11) {
        alert('Invalid Number');
    }
    //2- get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    //3- get the current balance
    const currentBalance = getBalance();

    //4- calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance<0){
        alert("Invalid amount");
        return;
    }
    //get the pin
    const pin = getValueFromInput("cashout-pin");
    if(pin == '1234'){
        alert("Cashout Successfull");
        setBalance(newBalance);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");

        //2- new div create korbo
        const newHistory = document.createElement('div');

        //3- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cash Out ${cashoutAmount}TK Success to ${cashoutNumber}, at ${new Date()}    
        </div>
        `
        //4- history container e newDiv append korbo
        history.appendChild(newHistory);
    }else {
        alert("Invalid Pin");
        return;
    }
});

// document.getElementById('cashout-btn').addEventListener('click', function (){
//     //1- get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if(cashoutNumber.length != "11") {
//         alert("Invalid Agent Number");
//         return;
//     }


//     //2- get the cashout amount, validate, convert to Number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
    
//     //3- get the Current Balance, validate, convert to NUmber
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4- Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
    
//     //5- Get the pin and verify
//     const cashoutPin = document.getElementById("cashout-pin");
//     const pin = cashoutPin.value;

//     if(pin == '1234') {
//         //5-1 true:: show an alert > set Balance
//         alert("cashout successful");
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }else {
//         //5-2 false:: show an error alert > return
//         alert("Invalid pin");
//         return;
//     }
// })