/**
 * 
 * @param {Number} num1 
 * @param {string} area 
 */


function solve(num1, area) {

    let speedLimit = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedLimit = 130;
        break;
        case 'interstate':
            speedLimit = 90;

            break;
        case 'city':
            speedLimit = 50;
         

            break;
        case 'residential':
            speedLimit = 20;
            break;

       
    }

    if (num1 <= speedLimit) {

        console.log(`Driving ${num1} km/h in a ${speedLimit} zone`);

    }else {
        difference = num1 - speedLimit;
        status = checkStatus(difference);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

    }

    function checkStatus(speed) {

        if (speed <= 20) {

           return 'speeding' ;

        }else if (speed <= 40) {
            
            return 'excessive speeding';

        }else{
              return 'reckless driving';
        }
        
    }
   
}

//solve(40, 'city')
solve(200, 'motorway')