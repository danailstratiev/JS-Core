function solve(matrix) {
    
    let rowSum = 0;
    let colSum = 0;
    let isMagicalMatrix = true;

    for (let i = 0; i < matrix[0].length; i++) {
        rowSum += matrix[0][i];        
    }

    for (let i = 0; i < matrix.length; i++) {
        colSum += matrix[i][0];
    }

    //Sum row calues
    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = 0; 

        for (let j = 0; j < matrix[i].length; j++) {
             currentRowSum += matrix[i][j];
        }

        if (currentRowSum !== rowSum) {
            isMagicalMatrix = false;
            console.log(isMagicalMatrix);
            return;
        }
    }

    //Sum column values
    for (let i = 0; i < matrix.length; i++) {
        let currentColSum = 0; 
        for (let j = 0; j < matrix.length; j++) {
             currentColSum += matrix[j][i];            
        }

        if (currentColSum !== colSum) {
            isMagicalMatrix = false;
            console.log(isMagicalMatrix);
            return;
        }
    }

    console.log(isMagicalMatrix);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );