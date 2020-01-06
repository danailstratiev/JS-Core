function solve(number1, number2) {
    
    let minNumber = Math.min(number1,number2);
    let foundNumber = 1;

    for (let index = 0; index <= minNumber; index++) {
        
        if (number1 % index == 0 && number2 % index == 0) {
            foundNumber = index;
        }
    }

    return foundNumber;
}


console.log(solve(2154, 458));