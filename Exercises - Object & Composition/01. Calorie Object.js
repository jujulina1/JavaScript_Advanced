function solve(array) {

    const nameOfFood = {};

    for (let i = 0; i < array.length - 1; i+=2) {

       nameOfFood[array[i]] = Number(array[i+1]);
        
    }

    console.log(nameOfFood);
    
}


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);