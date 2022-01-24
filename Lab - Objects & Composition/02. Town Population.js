function solve(arr) {

    let dictionary = {
       
    }

    for (let i = 0; i < arr.length; i++) {

        const element = arr[i].split(' <-> ');
      
        if(dictionary[element[0]] == undefined){
            dictionary[element[0]] = Number(element[1]);
            continue;
        }

        dictionary[element[0]] += Number(element[1]);
       
        
        
    }

    for (const key in dictionary) {
       console.log(`${key} : ${dictionary[key]}`);
    }
    
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);


solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);