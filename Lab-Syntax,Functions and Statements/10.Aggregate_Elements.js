function solve(params) {

 let sum = 0;
 let result = 0;
let concat = '';

    for (let i = 0; i < params.length; i++) {

        let number = Number(params[i]);
        result += 1 / number;
        sum += Number(params[i]);
        concat += params[i];
    }
    console.log(sum);
    console.log(result);
    console.log(concat);
    
}

solve([1, 2, 3])