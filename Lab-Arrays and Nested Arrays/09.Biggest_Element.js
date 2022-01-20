function solve(matrix) {

    
    let newArr = [];
    let length = matrix.length;

    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        let maxNumber = Math.max(...element);
        newArr.push(maxNumber);
        
        
    }
    return Math.max(...newArr);

    
}

console.log(solve([[20, 50, 10],
      [8, 33,145]]));