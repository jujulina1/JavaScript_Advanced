function solve(arr) {
    
    arr.sort((a,b) => a-b);
    const newArr = [];
let length = arr.length /2;
    for (let i = 0; i < length; i++) {
        const element = arr.shift();
        newArr.push(element);
        const lastElement = arr.pop();
        newArr.push(lastElement);

        
    }

   return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));