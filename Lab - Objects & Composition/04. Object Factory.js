function factory(library, orders) {

    //first we make an array
    const arr = [];

   for (const item of orders) {
       
 //create new object in which we save the current
    const obj = Object.assign({}, item.template);//return object;

    const nameofFunctions = Object.assign([], item.parts);//return array


    for (const nameFunction of nameofFunctions) {
        
        let currentFunction = library[nameFunction];//save the function
        obj[nameFunction] = currentFunction;
        // OR obj[nameFunction] = library[nameFunction];
        
        

    }
    arr.push(obj);



  
   }

  
  return arr;
    
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);