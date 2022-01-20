function solve(arr) {
    
    function length(a,b) {
        return (a.length - b.length) || a.localeCompare(b);
      
    }

    arr.sort(length);
    
    console.log(arr.join('\n'));
}

solve(['alpha','beta','gamma'] );
solve(['Isacc','Theodor','Jack','Harrison','George']);
solve(['test', 'Deny', 'omen', 'Default']);