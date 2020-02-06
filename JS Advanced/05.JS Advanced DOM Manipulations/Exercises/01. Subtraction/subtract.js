function subtract() {
    let firstInputField = document.getElementById('firstNumber').value;
    let secontInputField = document.getElementById('secondNumber').value;
    let result = Number(firstInputField) - Number(secontInputField);

    let resultTag = document.getElementById('result');
    resultTag.textContent = result;
}