function solve(arr) {

    //convert each element in array from string to number

    const newArray = arr.map(Number);
    return newArray[0]+ newArray[newArray.length -1];
    
}

console.log(solve(['20', '30', '40']));