function solve(delimiter, x = 5) {
    let result = new Array(x);

    for (let index = 0; index < x; index++) {
        result[index] = delimiter.repeat(x).split("").join(" ");
    }

    return result.join("\n")
}

console.log(solve("*", 10))