function solve(word) {
    let regex = /[a-zA-Z0-9]+/g;
    
    let matches = word.match(regex);
 

    for (let i = 0; i < matches.length; i++) {
        const element = matches[i].toUpperCase();
        matches[i]=element;
    }

    console.log(matches.join(', '));
}
solve('Hi, how are you?');