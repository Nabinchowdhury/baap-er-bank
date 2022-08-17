document.getElementById("deposit-btn").addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousDepositAmount = getTextElementById("total-deposit");

    const newTotalDeposit = newDepositAmount + previousDepositAmount;

    setTotalAmountById("total-deposit", newTotalDeposit);

    const previousTotalBalance = getTextElementById("total-balance");
    const newTotalBalance = previousTotalBalance + newDepositAmount;

    setTotalAmountById("total-balance", newTotalBalance)

    // console.log(typeof newDepositAmount);
})