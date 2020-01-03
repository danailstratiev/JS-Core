function solve(number) {
    number = number.toString();
    let isSingular = true;
    let firstNum = number[0];
    let sumOfDigits = +firstNum;
    let newDigit = -10000000;

    for (let i = 1; i < number.length; i++) {

        sumOfDigits += +number[i];

        if (firstNum !== number[i]) {
            isSingular = false;
        }
    }

    let message = `${isSingular}\n${sumOfDigits}`;
    return (message);
}

console.log(solve(2222222));