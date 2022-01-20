function solve(arr, rotations) {
    

    for (let i = 0; i < rotations; i++) {
      
        let last = arr.pop();
        arr.unshift(last);
        
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);