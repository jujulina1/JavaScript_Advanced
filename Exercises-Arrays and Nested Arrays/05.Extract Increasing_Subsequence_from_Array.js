function solve(array) {
    
 let newArr = [];

    let reducer = (a, b) =>{

       let number =  Math.max(a,b);
       if ( b >= a) {
        newArr.push(b);
       }
      
       return number;
    }
    
    array.reduce(reducer,0);
    return newArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));