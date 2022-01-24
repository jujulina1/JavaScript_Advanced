function solve(array) {
    
    const list = [];
    let properties = array[0].split(' ').filter(x=>x!=='|');
    
    let cityName = properties[0];
    let cityLat = properties[1];
    let cityLong = properties[2];

    class Town{
        constructor(city, latitude, longitude){
            this[cityName] =  city,
            this[cityLat] = latitude, 
            this[cityLong] = longitude
        }
    }


   for (let i = 1; i < array.length; i++) {
       const element = array[i].split('|').filter(x=>x!=='');
       let cityName = element[0].trim();
       let num1 = Number(element[1]);
       let num2 = Number(element[2]);
        let lat = Math.round((num1 + Number.EPSILON) * 100) / 100;
        let long = Math.round((num2 + Number.EPSILON) * 100) / 100;;
       let obj = new Town(cityName,lat, long);

       list.push(obj);
       
   }

  console.log(JSON.stringify(list))
}


// solve(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 | ']);

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])