'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
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
console.log(Seattle)
Seattle.generateCookies()
console.log(Seattle)


// TOKYO()
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Tokyo = {
  name: 'Tokyo', 
  minCust: 3, 
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  generateCookies: function () {
    for(let i = 0; i < hours.length; i++){
      let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(randomNumb); 
      this.cookiesBought.push(randomNumb)
    }  
  }
};
console.log(Tokyo)
Tokyo.generateCookies()
console.log(Tokyo)

// DUBAI()
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Dubai = {
  name: 'Dubai', 
  minCust: 11, 
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  generateCookies: function () {
    for(let i = 0; i < hours.length; i++){
      let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(randomNumb); 
      this.cookiesBought.push(randomNumb)
    }  
  }
};
console.log(Dubai)
Dubai.generateCookies()
console.log(Dubai)


// PARIS()
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Paris = {
  name: 'Paris', 
  minCust: 20, 
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  generateCookies: function () {
    for(let i = 0; i < hours.length; i++){
      let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(randomNumb); 
      this.cookiesBought.push(randomNumb)
    }  
  }
};
console.log(Paris)
Paris.generateCookies()
console.log(Paris)

// Lima()
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Lima = {
  name: 'Lima', 
  minCust: 2, 
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  generateCookies: function () {
    for(let i = 0; i < hours.length; i++){
      let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      console.log(randomNumb); 
      this.cookiesBought.push(randomNumb)
    }  
  }
};
console.log(Lima)
Lima.generateCookies()
console.log(Lima)