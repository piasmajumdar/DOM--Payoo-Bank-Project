document.getElementById('transfer-btn').addEventListener('click', function (){
    //1- get the agent number & validate
    const transferNumber = getValueFromInput('transfer-number');

    if(transferNumber.length != 11) {
        alert('Invalid Number');
    }
    //2- get the amount
    const transferAmount = getValueFromInput("transfer-amount");
    //3- get the current balance
    const currentBalance = getBalance();

    //4- calculate balance
    const newBalance = currentBalance - Number(transferAmount);
    console.log(newBalance);
    if(newBalance<0){
        alert("Invalid amount");
        return;
    }
    //get the pin
    const pin = getValueFromInput("transfer-pin");
    if(pin == '1234'){
        alert("transfer Successfull");
        setBalance(newBalance);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");

        //2- new div create korbo
        const newHistory = document.createElement('div');

        //3- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Transfer of ${transferAmount}TK Success to ${transferNumber}, at ${new Date()}    
        </div>
        `
        //4- history container e newDiv append korbo
        history.appendChild(newHistory);
    }else {
        alert("Invalid Pin");
        return;
    }
});