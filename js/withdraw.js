document.getElementById("withdraw-btn").addEventListener('click', function () {

    const withdrawField = document.getElementById("withdraw-field");
    const newTotalWithdraw = parseFloat(withdrawField.value);
    document.getElementById("withdraw-field").value = "";
    if (isNaN(newTotalWithdraw) || newTotalWithdraw < 0) {
        alert("Input proper Amount");
        return;
    }



    // ========if/else option:2 ===========================================
    // const balanceTotalElement = document.getElementById("total-balance");
    // const previousTotalBalance = parseFloat(balanceTotalElement.innerText);
    // if (newTotalWithdraw < previousTotalBalance) {
    // ========================================================

    const totalWithdraw = document.getElementById("total-withdraw");
    const previousTotalWithdrawString = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

    //// ========if/else option:2 =========================================== 
    // totalWithdraw.innerText = previousTotalWithdraw + newTotalWithdraw;
    // ====================================================




    const balanceTotalElement = document.getElementById("total-balance");
    const previousTotalBalance = parseFloat(balanceTotalElement.innerText);

    if (newTotalWithdraw > previousTotalBalance) {
        alert("insuffient Balance");
        return;
    }
    totalWithdraw.innerText = previousTotalWithdraw + newTotalWithdraw;




    balanceTotalElement.innerText = previousTotalBalance - newTotalWithdraw;


    // }

    // ========if/else option:2 ===========================================
    // else { alert("insuffient Balance") }
    // ===============================================
})