function print(input) {
    let arr = [];
    let number = 1;

    for (let element of input) {
      
        if (element === "add") {
            arr.push(number);
        }
        else {
            arr.pop(number);
        }

        number++;
    }

    if (arr.length === 0) {
        console.log("Empty");
        return;
    }
    
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        
        console.log(element);
    }
}

print(['add', 
'add', 
'remove', 
'add', 
'add']
);