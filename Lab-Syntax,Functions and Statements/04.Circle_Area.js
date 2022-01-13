function solve(num) {

let typeOfArgument = typeof (num);
    if (typeOfArgument === 'number') {
        let area = num ** 2 * Math.PI;
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`);
    }
    
}

solve(5);
solve('name');