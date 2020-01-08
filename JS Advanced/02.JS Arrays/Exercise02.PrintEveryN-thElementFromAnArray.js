function print(input) {
    let step = +input.pop();

    for (let i = 0; i < input.length; i+=step) {

        console.log(input[i]);
    }
}

print(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)