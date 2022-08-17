function getInputFieldValueById(id) {

    const inputFieldvalue = document.getElementById(id);
    const inputAmountString = inputFieldvalue.value;
    const inputAmount = parseFloat(inputAmountString);



    inputFieldvalue.value = "";

    if (isNaN(inputAmount) || inputAmount < 0) {
        alert("Enter a proper amount")

        return 0;
    }
    else {
        return inputAmount;
    }


}


function getTextElementById(id) {

    const textElement = document.getElementById(id);
    const textElementAmountString = textElement.innerText;
    const textElementAmount = parseFloat(textElementAmountString);

    return textElementAmount;
}


function setTotalAmountById(id, value) {
    const totalAmount = document.getElementById(id);
    totalAmount.innerText = value;
}

