function fruit(fruit, weight, price) {
    

    let kg = weight /1000;
    let totalPrice = kg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);