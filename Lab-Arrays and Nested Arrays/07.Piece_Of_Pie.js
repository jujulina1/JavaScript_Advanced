function solve(arr, flavor1, flavor2) {
    
    //first we have to find the index of flavor1
    //if find it return idx otherwise retun -1

    let idx = arr.indexOf(flavor1);
    let idx2 = arr.indexOf(flavor2);
    let ElementsToRemove = idx2 - idx + 1;
    return newArr = arr.splice(idx, ElementsToRemove);
    
    
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));
