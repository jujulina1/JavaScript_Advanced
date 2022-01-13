function solve(num) {

    function isEqual(num) {
        
        let arr = num.toString().split('');

        for (let i = 0; i < arr.length-1; i++) {
            if (arr [i] != arr [i+1]) {
                return false;
            }
            
        }

        return true;
    }

    function sumOfDigits(num) {

        let sum = 0;
        
        let arr = num.toString().split('');
        for (let i = 0; i < arr.length ; i++) {
            let element = Number(arr[i]);
            sum += element;
            
        }

        return sum;
    }

    console.log(isEqual(num));
    console.log(sumOfDigits(num));
    
}

solve(2222222);
solve(1234);