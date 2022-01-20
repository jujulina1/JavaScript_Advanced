function solve(arr) {
    
    
    const newArr = [];
   for (let i = 0; i < arr.length; i++) {
       const element = arr[i];

       if (element == 'add') {
           
            newArr.push(i+1);
       }else{
           newArr.pop();
   
       }
       
   }
   let output = newArr.length == 0 ? 'Empty' : newArr.join('\n');
   console.log(output);
}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove','remove','remove']);