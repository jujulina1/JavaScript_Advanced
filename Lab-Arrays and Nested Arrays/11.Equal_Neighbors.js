function solve(matrix) {


    let totalCounter = 0;
      
    function transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
      }


     //let newArr = transpose(matrix);      
    

     function countEqualElements(matrix) {
         
        let counter = 0;
        for (let i = 0; i < matrix.length; i++) {
            const array = matrix[i];
            for (let j = 0; j < array.length-1; j++) {
                const firstElement= array[j];
                const secondElement= array[j + 1];

                if (firstElement === secondElement) {
                    counter++;
                }
                
            }
          
            
        }

        return counter;
     }

     let secondMatrix = transpose(matrix); 
     totalCounter += countEqualElements(matrix);
     totalCounter += countEqualElements(secondMatrix);
     return totalCounter;

    
}

// console.log(solve([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]));

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));