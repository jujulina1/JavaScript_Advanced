function solve(array) {

    let result= [];//result
    
   for (let i = 0; i < array.length; i++) {
       const element = array[i];

       if (Number.isInteger(element)) {
           result.push(element);
       }else{
          
           //undefined
            let firstNumber = result[result.length-2];
            let secondNumber = result[result.length-1];
            
            if (typeof firstNumber == 'undefined') {
                break;
            }
            
            let sum = operation(firstNumber, secondNumber, element);
            array[i]=sum; //we replace current operator
            
            result.splice(result.length-2,2)
            result.push(sum);
            
           
          

       }
       
   }
    


    function operation(firstNumber, secondNumber, currentOperator) {

        let result = 0;
        
        if (currentOperator === '+') {

            result = firstNumber + secondNumber;
            
        }else if(currentOperator === '-'){
            result = firstNumber - secondNumber;

        }else if(currentOperator === '*'){
            result = firstNumber * secondNumber;

        }else if(currentOperator === '/'){
            result = firstNumber / secondNumber;
        }

        return result;
    }

    let hasOperators = array.some(x=>typeof x == 'string');

    if (result.length > 1) {
        console.log(`Error: too many operands!`);
        return;
    }

    if (hasOperators) {
        console.log(`Error: not enough operands!`);
        
    }else{
        console.log(result[0]);
    }

    
    

}
solve([2,2,'+','-','*'])//ok
solve([2,'+','+','-',3,'*'])
solve([3,4,'+']);//7 ok
solve([5,3,4,'*','-']);//-7 ok
solve([7,33,8,'-'])//ok

solve([15,'/'])//ok
solve([-1,1,'+',101,'*',18,'+',3,'/']); //6 ok
solve([31, 2,'+',11,'/']); //3//ok
   
    
    
   

