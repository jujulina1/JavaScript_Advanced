function solve(...params) {
    let num = Number(params.shift());

    for (let i = 0; i < params.length; i++) {
        let element = params[i];
        switch (element) {
            case 'chop':
                num /=2; 
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= 0.20 * num;  
                break;
        
        }

        console.log(num);
        
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');