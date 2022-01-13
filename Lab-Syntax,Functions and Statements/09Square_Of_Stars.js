function solve(...params) {

    let length = params.length;
    let symvol;
    if (length === 0) {
        symvol = 5;
    }else{
        symvol = Number(params[0]);
    }

    let square = ('* '.repeat(symvol));
    for (let i = 0; i < symvol; i++) {

        console.log(square);
    
    }
    
  
}

solve();
//solve(2);