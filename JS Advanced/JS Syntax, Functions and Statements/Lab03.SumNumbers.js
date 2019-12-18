function solve(min,max){
    let result = 0;
 
    for (let index = min; index <= max; index++) {
        result += index        
    }

    return result;
}

console.log(solve(1,5))