function solve(matrix) {

let output = '';
    function primaryDiagonal(matrix) {
        
        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            
        }

        return sum;
    }
    

    function secondaryDiagonal(matrix) {
        
        let sum = 0;
        let counterCol = matrix.length;

        for (let rows = 0; rows < matrix.length; rows++) {
           let element = matrix[rows][--counterCol];
           sum+=element;

            
        }

        return sum;
    }
    output += primaryDiagonal(matrix) + " " + secondaryDiagonal(matrix);
    console.log(output);
}


solve([[20, 40],
      [10, 60]]);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);