function sort(input, word) {
    let numbers = input;
    let command = word;
    let finalNumbers = [];
    if (command === 'asc') {
        numbers.sort((a, b) => a-b);
    }else{
        numbers.sort((a, b) => b-a);
    }

    return numbers;
}

console.log(sertArray([14, 7, 17, 6, 8], 'asc'));


//alternative
function sertArray(inputArray, sortMethod) {
    var ascendingComparator = function (a, b) {
    return a - b;
    }
    var descendingComparator = function (a, b) {
    return b - a;
    }
    var sortingStrategies = {
    'asc': ascendingComparator,
    'desc': descendingComparator
    }
    return inputArray.sort(sortingStrategies [sortMethod] );
    }