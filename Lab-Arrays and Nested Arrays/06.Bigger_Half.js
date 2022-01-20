function solve(arr) {

    arr.sort((a,b) => a-b);

    let length = Math.ceil(arr.length / 2);
    const newArray = arr.slice(-length);
    return newArray;
}

conlole.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));