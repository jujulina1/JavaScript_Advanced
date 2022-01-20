function solve(row, col) {

    //make empty matrix if it is 2d matrix

    //to do the spiral matrix we have to divide logic in four parts
    //FIRST we have to do the first Horizontal array
    //SECOND we have to do the Last Vertical array
    //THIRD we have to do the Bottom horizontal array
    //LAST we have to do the first Vertical array

    const matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([])
    }

    //Set our starting variables
    let counter = 1; 
    let startRow = 0; 
    let endRow = row - 1;
    let startColumn = 0; 
    let endColumn = col - 1; 

    /// make first col  -- Top Row

    while (startColumn <= endColumn && startRow <= endRow) {
        
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }

        startRow++;


        // 2. Right column
        for (let i = startRow; i <= endRow; i++) { //4
            matrix[i][endColumn] = counter;
            counter++;
        }

        endColumn--;  //decrement Column - we done last vertical column 

        //we have to do BOTTOM from right to left

        for (let i = endColumn; i >= startColumn; i--) { 
            matrix[endRow][i] = counter;
            counter++;

        }

        endRow--;  



        //4. we have to do the first column
        for (let i = endRow; i >= startRow; i--) {  //endrow 3 start row 1
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

    }
    for (const arr of matrix) {

        console.log(arr.join(' '));

    }

}

solve(5, 5);
solve(3, 3);