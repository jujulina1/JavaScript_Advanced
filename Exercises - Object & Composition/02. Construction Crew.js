function solve(worker) {

if (worker.dizziness) {
    
    //worker.dizziness = false;
    worker.levelOfHydrated +=  worker.weight * 0.1 * worker.experience;
    worker.dizziness = false;
}
return worker;
// function constructionCrew(obj) {
//     if(obj.dizziness) {
//         obj.dizziness = false;
//         obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
//     }
//     return obj;
// }

    
}

console.log(solve({
    weight: 80, // kg
    experience: 1,//years
    levelOfHydrated: 0, //millilitri
    dizziness: true
}));


console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));


console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));