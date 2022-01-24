function solve(car) {

    const requaredCar = {

       smallEngine: { power: 90, volume: 1800 },
       normalEngine: { power: 120, volume: 2400 },
       monsterEngine: { power: 200, volume: 3500 },
       hatchback: { type: 'hatchback', color: null },
       coupe: { type: 'coupe', color: null }


    }

  let model = car.model;
   
    if (car.power <= 90) {
        car.engine = requaredCar.smallEngine;
    }else if(car.power > 90 && car.power <= 120){
        car.engine = requaredCar.normalEngine;
    }else{
        car.engine = requaredCar.monsterEngine;
    }
   

    if (car.carriage === 'hatchback') {

        let hatchback1 = requaredCar.hatchback;
        hatchback1.color = car.color;
        car['carriage'] = hatchback1;
    

    }else if(car.carriage === 'coupe'){

        let type = requaredCar.coupe;
        type.color = car.color;
        car['carriage'] = type;
    }

    let size = car.wheelsize;
     if (car.wheelsize % 2 === 0) {
        
       size -=1;
       
     }
     car['wheels'] = new Array(4).fill(size);;

     const newCar = {
        model: car.model,
        engine: car.engine,
       
        carriage: car.carriage,
        wheels: car.wheels
        

    }

   

return newCar;

    
}


console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));


console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));