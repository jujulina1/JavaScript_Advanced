function solve(array) {


    let list = [];



    for (const iterator of array) {


        let [town, product, price] = iterator.split(' | ');
        let obj = createObject(town, product, price);

        if (list.some(x => x.product === product)) {
            let current = list.find(x => x.product === product);//obj from list

            if (obj.price < current.price) {

                current.price = obj.price;
                current.town = obj.town;

            }
            continue;

        }




        list.push(obj);


    }


   
    for (const iterator of list) {
        console.log(`${iterator.product} -> ${iterator.price} (${iterator.town})`)
    }

    function createObject(town, product, price) {

        price = Number(price);
    
        return {
            product,
            town,
            price
    
        }
    
    
    }






}










solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);


// solve((['Sofia City | Audi | 100000', 
// 'Sofia City | BMW | 100000', 
// 'Sofia City | Mitsubishi | 10000', 
// 'Sofia City | Mercedes | 10000', 
// 'Sofia City | NoOffenseToCarLovers | 0', 
// 'Mexico City | Audi | 1000', 
// 'Mexico City | BMW | 99999', 
// 'Mexico City | Mitsubishi | 10000',
//  'New York City | Mitsubishi | 1000', 
//  'Washington City | Mercedes | 1000']));