'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle', 
  minCust: 23, 
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  generateCookies: function () {
    for(let i = 0; i < hours.length; i++){
      let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(randomNumb); 
      this.cookiesBought.push(randomNumb)
    }  
  }
};
console.log(seattle)
seattle.generateCookies()
console.log(seattle)