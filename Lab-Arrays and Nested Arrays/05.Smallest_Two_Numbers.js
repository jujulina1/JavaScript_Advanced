function solve(arr) {
    
    const result = [];

    arr.sort((a,b) => a - b);

    result.push(arr.shift());
    result.push(arr.shift());
    
    console.log(result.join(' '));

   
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);