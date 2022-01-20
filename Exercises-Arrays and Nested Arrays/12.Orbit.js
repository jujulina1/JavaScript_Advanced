function solve(array) {

    let [width, height, x, y] = array;
    // create a matrix with empty positions
    const matrix = [];

    for (let row = 0; row < height; row++) {
        const element = new Array(width);
        matrix.push(element);
    }


    for (let i = 0; i < width; i++) {

        for (let j = 0; j < height; j++) {
            
            matrix[i][j] = Math.max(Math.abs(i - x),Math.abs(j - y)) + 1;
        }
        
        
    }
 for (const arr of matrix) {

    console.log(arr.join(' '));
 }

}

solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);