function print(input) {
    let delimiter = input.pop();

    let newArr = input.join(delimiter);

    console.log(newArr);
}

print(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)