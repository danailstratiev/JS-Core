const getFibonator = () =>{
    let currentNum = 0;
    let nextNum = 1;

    return() => {
        const result = currentNum;
        currentNum = nextNum;
        nextNum += result;
        return result;
    }
}