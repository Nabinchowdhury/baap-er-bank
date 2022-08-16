document.getElementById("deposit-btn").addEventListener('click', function () {
    const newDepositField = document.getElementById("deposit-field");
    const newDepositAmount = parseFloat(newDepositField.value);
    document.getElementById("deposit-field").value = "";
    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert("Input proper Amount");
        return;
    }
    const balanceTotalElement = document.getElementById("total-balance");
    const previousTotalBalance = parseFloat(balanceTotalElement.innerText);




    const depositTotalElement = document.getElementById("total-deposit");
    const previousTotalDepositString = depositTotalElement.innerText;
    previousTotalDeposit = parseFloat(previousTotalDepositString);
    depositTotalElement.innerText = newDepositAmount + previousTotalDeposit;




    balanceTotalElement.innerText = newDepositAmount + previousTotalBalance;




})