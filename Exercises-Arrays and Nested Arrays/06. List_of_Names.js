function solve(arr) {

    let output ='';
    arr.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        output += `${i+1}.${element}${"\n"}`;
        //output += "\n";
    }

return output;
    
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));

