function evenPosiotion(arr) {
    
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 == 0) {
            newArr.push(element);
        }
        
        
    }

    console.log(newArr.join(' '));
}
evenPosiotion(['20', '30', '40', '50', '60'])