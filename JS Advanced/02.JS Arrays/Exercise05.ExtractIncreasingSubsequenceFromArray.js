function extract(input) {

    let firstElement = input[0];

    let extracted = [firstElement];

    for (let i = 1; i < input.length; i++) {
        
        let lastElement = extracted.pop();
        let currentElement = input[i];

        if (currentElement > lastElement) {
            extracted.push(lastElement);
            extracted.push(currentElement);
        }else {
            extracted.push(lastElement);
        }    
    }

    for (let element of extracted) {
        console.log(element)        
    }
}

extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );