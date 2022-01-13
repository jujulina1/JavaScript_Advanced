function solve(x1, y1, x2, y2) {

    function result(x1, y1, x2, y2) {

        let result =  Math.sqrt((x2-x1) ** 2 + (y2 - y1) ** 2);
        let isValid = Number.isInteger(result) ? 'valid' : 'invalid';
        return output =  `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`;
    }

    console.log(result(x1, y1, 0, 0));
    console.log(result(x2, y2, 0, 0));
    console.log(result(x1, y1, x2, y2));
    
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);