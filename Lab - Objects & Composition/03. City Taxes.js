function cityTaxes(name, population, treasury) {
    
    const city = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes(){
             this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage = percentage/100;
             this.population += (this.population * percentage);
        },
        applyRecession(percentage) {
        percentage = percentage / 100; 
             this.treasury -= (this.treasury * percentage );
        }

    };

return city;

}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

const city1 =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);