document.getElementById("pay-bill-btn").addEventListener('click', function () {
    //1- bank account get
    const bankAccount = getValueFromInput("pay-bill-option");
    if (bankAccount == "Select bill type") {
        alert("please Select bill type");
        return;
    }
    //2- get bank account number
    const accno = getValueFromInput("pay-bill-number");
    if (accno.length != 11) {
        alert("Invalid acc no.");
        return;
    }
    //3- get amount
    const amount = getValueFromInput("pay-bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);

    const pin = getValueFromInput("pay-bill-pin");
    if (pin == "1234") {
        alert(`pay bill Success
            for ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance);

        //1- history-container ke dhore niye asbo
        const history = document.getElementById("history-container");

        //2- new div create korbo
        const newHistory = document.createElement('div');

        //3- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
                pay-bill Success for ${bankAccount}, acc-no ${accno} at ${new Date()}    
        </div>
        `
        //4- history container e newDiv append korbo
        history.appendChild(newHistory);
    } else {
        alert("Invalid Pin");
        return;
    }

})