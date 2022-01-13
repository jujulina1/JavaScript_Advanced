function solve(steps, lengthInMeter, speedkm) {

let distance = steps * lengthInMeter;//meters 2400

let speed = speedkm *1000 /3600;//1,3888 - meter na sec

let time = distance / speed;// in sec

let breaks = (parseInt(distance/500)) * 60; // in sec

time += breaks;

let hours = Math.floor(time/60/60).toFixed(0).padStart(2, '0')//48
let min = Math.floor(time / 60).toFixed(0).padStart(2, '0');
let sec = (time % 60).toFixed(0).padStart(2, '0');


console.log(`${hours}:${min}:${sec}`);
}


solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5)