/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 */


function solve(n, k) {
    
    const array = [1];

    let reducer = (a,b) => a + b;
    for (let i = 0; i < n - 1; i++) {

        const currentArray = array.slice(-k);
        let sum = currentArray.reduce(reducer);
        array.push(sum);
        
    }
   
 


    return array;
 
}

console.log(solve(6, 3));
console.log(solve(8, 2));