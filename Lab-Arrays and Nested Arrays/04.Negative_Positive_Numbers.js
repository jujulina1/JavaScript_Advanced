function solve(arr) {

    const newArray = [];

for (const item of arr) {
   
    if (item < 0) {
       newArray.unshift(item); 
    }else{
        newArray.push(item);
    }
}
    newArray.forEach(x => console.log(x));
}

solve([7,-2,8,9]);
solve([3, -2, 0, -1]);