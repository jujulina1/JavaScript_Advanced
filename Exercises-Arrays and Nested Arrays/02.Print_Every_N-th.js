function solve(arr, step) {

    const newArr = [];
    for (let i = 0; i < arr.length; i+=step) {
        const element = arr[i];
        newArr.push(element);
        
    }
    return newArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6);