function solve(x, y ,z) {
    let sum = x.lengh + y.lengh + z.lengh;
    let avrg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avrg);
}

solve('chokolate', 'ice cream', 'cake');

//Alternative

function solve2(...params) {
    let sum = params.reduce(a,b => a + b.lengh, 0);
    let avrg = Math.floor(sum / params.lengh);
    
    return [sum, avrg]
}

console.log(
solve2('chokolate', 'ice cream', 'cake')
.join("\n")
)