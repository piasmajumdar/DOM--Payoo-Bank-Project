document.getElementById('bonus-btn').addEventListener('click', function () {
    const bonusCoupon = getValueFromInput('bonus-coupon');
    if (bonusCoupon.startsWith('payoo-')) {
        const coupons = bonusCoupon.split('-');
        const bonusAmount = coupons[1];
        console.log(bonusAmount, typeof parseInt(bonusAmount));

        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(bonusAmount);
        console.log("new balance", newBalance)
        if (!isNaN(newBalance)) {
            alert(`${bonusAmount}TK added Successfully`)
            setBalance(newBalance);


            //1- history-container ke dhore niye asbo
            const history = document.getElementById("history-container");

            //2- new div create korbo
            const newHistory = document.createElement('div');

            //3- new div innerHTML add korbo
            newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                    Bonus Coupon ${bonusAmount}TK Added, at ${new Date()}    
                </div>
                `
            //4- history container e newDiv append korbo
            history.appendChild(newHistory);


        } else {
            alert('Invalid Coupon Code');
        }

    }

})