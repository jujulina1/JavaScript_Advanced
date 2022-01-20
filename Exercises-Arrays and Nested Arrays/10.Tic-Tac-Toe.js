function solve(array) {

    function includeElement(matrix) {
        
        for (let i = 0; i < matrix.length; i++) {
            const element = matrix[i];
            if (element.includes('false')) {
                return true;
            }
            
        }

        return false;
    }

    function isAvailable(table , row, col) {

        let position = table[row][col];
        if (position === 'X' || position === 'O') {
            return false;
        }
        return true;
    }

    function checkDiagonal(table) {

        const firstArray = [];
        const secondArray = [];
        for (let i = 0; i < table.length; i++) {
            firstArray.push(table[i][i]);
            secondArray.push(table[i][table.length-1-i])
        }
        return [firstArray, secondArray];  
        
    }

    function checkRowsAndCol(table, row, col, matrix) {
        
        let horizontalArray = table[row];
        let verticalArray = [];
        let primaryDiagonal = matrix[0];
        let secondaryDiagonal = matrix[1];

        for (let i = 0; i < table.length; i++) {
            verticalArray.push(table[i][col]);
            
        }
        
        const allEqual = arr => arr.every(val => val === arr[0]);

        if (allEqual(horizontalArray) || allEqual(verticalArray)){
        
         
            return true;
        }
        if (!primaryDiagonal.includes('false') && allEqual(primaryDiagonal)) {
            
            return true;
        }
        if (!secondaryDiagonal.includes('false') && allEqual(secondaryDiagonal)) {
            
            return true;
        }

        return false;
        
    }

    const table = [['false', 'false', 'false'],
                  ['false', 'false', 'false'],
                  ['false', 'false', 'false']];

   let counterPlayers = 1;
    let currentPlayer = '';

    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ');
        let row = Number(element[0]);
        let col = Number((element[1]));
       
        //  the position is Available
        if (!isAvailable(table, row, col)) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }


        if (counterPlayers % 2 == 1) {

            currentPlayer = 'X';
           
        }else if(counterPlayers % 2 == 0 ){

            currentPlayer = 'O';
            
        }
        table[row][col] = currentPlayer;
        //catch if there is matches

        if (checkRowsAndCol(table, row, col, checkDiagonal(table))) {
            console.log(`Player ${currentPlayer} wins!`)
            break;
        }
        if (!includeElement(table)) {  // true if find false

            console.log(`The game ended! Nobody wins :(`);
            break;
        }
       
       counterPlayers++;
        //console.log(table);

    }
    for (let i = 0; i < table.length; i++) {
        console.log(table[i].join('\t'))
        
    }
}

solve(["0 1","0 0","0 2", "2 0","1 0","1 1","1 2","2 2","2 1","0 0"]);
solve(["0 0","0 0","1 1","0 1","1 2","0 2","2 2","1 2","2 2","2 1"]);
solve(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]);