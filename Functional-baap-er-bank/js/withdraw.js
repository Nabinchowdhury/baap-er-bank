document.getElementById("withdraw-btn").addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawAmount = getTextElementById("total-withdraw");
    const previousTotalBalance = getTextElementById("total-balance");
    if (newWithdrawAmount > previousTotalBalance) {
        alert("Enter a proper amount")
        return 0;
    }

    const newTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;

    setTotalAmountById("total-withdraw", newTotalWithdraw);



    const newTotalBalance = previousTotalBalance - newWithdrawAmount;

    setTotalAmountById("total-balance", newTotalBalance)
})