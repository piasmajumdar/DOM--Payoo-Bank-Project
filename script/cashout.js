document.getElementById('cashout-btn').addEventListener('click', function (){
    //1- get the agent number & validate
    const cashoutNumberInput = document.getElementById('agent-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);

    if(cashoutNumber.length != "11") {
        alert("Invalid Agent Number");
        return;
    }


    //2- get the cashout amount, validate, convert to Number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    
    //3- get the Current Balance, validate, convert to NUmber
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    //4- Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    
    //5- Get the pin and verify
    const cashoutPin = document.getElementById("cashout-pin");
    const pin = cashoutPin.value;

    if(pin == '1234') {
        //5-1 true:: show an alert > set Balance
        alert("cashout successful");
        console.log("new balance", newBalance);
        balanceElement.innerText = newBalance;
    }else {
        //5-2 false:: show an error alert > return
        alert("Invalid pin");
        return;
    }
})