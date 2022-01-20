function solve(arr) {


    // const newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 == 1) {
    //         let element = arr[i];
    //         newArr.push(element);
    //     }
        
    // }

    return arr.filter((x, idx) => idx % 2 == 1)
    .map(x => x*2)
    .reverse()
    .join(' ');
    
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));