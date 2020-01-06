function arrays(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        }else{
            newArr.push(arr[i]);
        }
    }

    for (let number of newArr) {
        console.log(number);
    }
}