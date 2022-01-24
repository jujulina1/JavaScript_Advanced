function solve(array) {
    
    const result = [];
   
    for (const item of array) {
         

       
        let currentArray = item.split(' / '); // [] Isacc ,25 , []

        let heroName = currentArray.shift();//Isacc
        let heroAge = Number(currentArray.shift());//25
        let items = [];
        if(currentArray.length !==0){
            items = currentArray[0].split(', ');//array from items
        }
        
        const hero = createObject(heroName, heroAge, items);
        
        result.push(hero);
        
        
    } 


    function createObject(name, level, items) {
          
        const obj = {
            name,
            level,
            items
        }
        return obj;
        
    }

    return JSON.stringify(result);
}


console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));

solve(['Isacc / 25']);