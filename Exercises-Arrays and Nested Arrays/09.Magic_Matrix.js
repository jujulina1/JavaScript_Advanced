function solve(matrix) {


let sum = matrix[0].reduce((a,b)=> a+b);

for (let i = 0; i < matrix[0].length; i++) {
    let currentSum = 0;

    for (let j = 0; j < matrix.length; j++) {
        currentSum += matrix[j][i];
        
    }
    if (currentSum !== sum) {
        return false;
    }
    
}
return true;

}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));
