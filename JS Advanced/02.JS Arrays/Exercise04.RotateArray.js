function rotate(input) {
    let numberOfRotations = +input.pop();

    for (let i = 0; i < numberOfRotations; i++) {
        
        let number = input.pop();
        input.unshift(number);
    }

    console.log(input.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);