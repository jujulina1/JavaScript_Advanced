function solve(...params) {


    let sum = 0;
    for (let i = 0; i < params.length; i++) {
       let word = params[i].toString();
       sum+= word.length;
        
    }

    let average = Math.round(sum / params.length);
    console.log(sum);
    console.log(average);

}

solve('chocolate', 'ice cream', 'cake');