function solve(x, y, operator){
    let result;

    switch(operator){
        case '+':result = x + y; break;
        case '-':result = x - y; break;
        case '/':result = x / y; break;
        case '*':result = x * y; break;
        case '%':result = x % y; break;
        case '**':result = x ** y; break;
    }

    console.log(result);
}

solve(5,6,'*');

//Alternative 

function solve2(operator, ...params){
    return params.reduce((a, b) => 
    eval(`${a}${operator}${b}`), params.shift());
}

console.log(solve2('*',10,6));
