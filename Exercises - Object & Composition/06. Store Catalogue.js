function solve(array) {

    let newArr = array.sort((a,b) => a.localeCompare(b));
    let startLetter = newArr[0].split('')[0];;//'A'
    console.log(startLetter);

    for (let i = 0; i < newArr.length; i++) {
        
        const element = newArr[i].split(' : ');

        const obj = {
            product: element[0],
            price: element[1]
        }
          let word = element[0];
        let currentLetter = word.split('')[0];//A
        if (currentLetter !== startLetter) {
            console.log(currentLetter);
            startLetter = currentLetter;
        }
        let output = `  ${obj.product}: ${obj.price}`
        console.log(output);
    

        
        
    }
    
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);