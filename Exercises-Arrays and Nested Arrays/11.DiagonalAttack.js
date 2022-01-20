function solve(array) {

    function sumOfDiagonals(matrix) {

        let firstArray = [];
        let secondArray = [];
        for (let i = 0; i < matrix.length; i++) {
            let first = matrix[i][i];
            let second = matrix[i][matrix.length - 1 - i];
            firstArray.push(first);
            secondArray.push(second);

        }

        let sumOfFirstArr = firstArray.reduce((a, b) => a + b);
        let sumOfSecondArr = secondArray.reduce((a, b) => a + b);

        if (sumOfFirstArr === sumOfSecondArr) {
            return sumOfFirstArr;

        }

        return 0;
    }

    //first parse int matrix
    const arr = [];

    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ').map(Number);
        newArr.push(element);
    }

    //check diagonal sum
    let sum = sumOfDiagonals(newArr);
   
    if ( sum !== 0) {

        let length = Math.ceil(newArr.length / 2);//3

        for (let row = 0; row < length; row++) {
            const firstElement = newArr[row][row];
            const secondElement = newArr[row][newArr.length - 1 - row];
    
            newArr[row].fill(sum);
            newArr[row][row] = firstElement;
            newArr[row][newArr.length - 1 - row] = secondElement;
            
        }
    
        let startRow = newArr.length - 1;//4
    
        let col = 0;
        for (let row = startRow; row >= length; row--) {
    
            const firstElement = newArr[row][col];
    
            const secondElement = newArr[row][newArr.length - 1 - col];
    
    
            newArr[row].fill(sum);
            newArr[row][col] = firstElement;
            newArr[row][newArr.length - 1 - col] = secondElement;
           
            col++;
        }
        
    }


    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i].join(' '));
        
    }

}


solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])

solve(['1 1 1',
'1 1 1',
'1 1 0']);