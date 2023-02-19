'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let table = document.getElementById('table');
//let body = document.createElement('tr');
console.log(table);
//let head = document.createElement('thead');
//let foot = document.createElement('tfoot');
//table.appendChild(head);
//table.appendChild(body);
//table.appendChild(foot);

// ******************* Constructor Function *************************
function CookieShop(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesEachHour = [];
  this.totalCookies = 0;
}
let seattleShop = new CookieShop('Seattle', 23, 65, 6.3)
let tokyoShop = new CookieShop('Tokyo', 3, 24, 1.2)
let dubaiShop = new CookieShop('Dubai', 11, 38, 3.7)
let parisShop = new CookieShop('Paris', 20, 38, 2.3)
let limaShop = new CookieShop('Lima', 2, 16, 4.6)
let allShop = [seattleShop, tokyoShop, dubaiShop, parisShop, limaShop];
console.log(allShop);

// ************* Helper Function **************
function renderAll() {
  for (let i = 0; i < allShop.length; i++) {
    allShop[i].calculateCookiesEachHour();
    allShop[i].render();
    console.log(allShop[i]);
  }
}

// ******** PROTOTYPE FUNCTION ***************
CookieShop.prototype.calculateCustomersEachHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  
  
  //for (let i = 0; i < hours.length; i++) {
    //  this.customersEachHour.push(randomCust(this.minCust, this.maxCust));
  }
  
  CookieShop.prototype.calculateCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieCount = (Math.floor(this.calculateCustomersEachHour() * this.avgCookie));
      this.totalCookies += cookieCount;
    }
    CookieShop.prototype.render = function () {
      let tr = document.createElement('tr');
      table.appendChild(tr);
      let th = document.createElement('th');
      th.textContent = this.location;
      tr.appendChild(th);
      for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
      }
      let td = document.createElement('td');
      td.textContent = this.totalCookies;
      tr.appendChild(td);
    }
    
    console.log(this.cookiesEachHour);
    console.log(this.totalCookies);
    console.log(this.customersEachHour);
  }
  function renderHeader() {
    let header = document.createElement('tr');
  table.appendChild(header);
}
//  seattleShop.calculateCookiesEachHour();
//  tokyoShop.calculateCookiesEachHour();
//  dubaiShop.calculateCookiesEachHour();
//  parisShop.calculateCookiesEachHour();
//  limaShop.calculateCookiesEachHour();
 
 renderHeader();
 renderAll();
 
 // let Seattle = {
   //   name: 'Seattle',
   //   minCust: 23,
   //   maxCust: 65,
   //   avgCookieBought: 6.3,
   //   cookiesBought: [],
   //   generateCookies: function () {
     //     for (let i = 0; i < hours.length; i++) {
//       let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//       console.log(randomNumb);
//       this.cookiesBought.push(randomNumb)
//     }
//   },
//   render: function () {
//     this.generateCookies();
//     let seattleList = document.getElementById('Seattle');
//     let storeName = document.createElement('h2');
//     storeName.textContent = this.name;
//     seattleList.appendChild(storeName);
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//   }
// };
// console.log(Seattle)
// Seattle.generateCookies()
// console.log(Seattle)

// // TOKYO()
// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   generateCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//       console.log(randomNumb);
//       this.cookiesBought.push(randomNumb)
//     }
//   },
//   render: function () {
//     this.generateCookies();
//     let tokyoList = document.getElementById('Tokyo');
//     let storeName = document.createElement('h2');
//     storeName.textContent = this.name;
//     tokyoList.appendChild(storeName);
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//   }
// };
// console.log(Tokyo)
// Tokyo.generateCookies()
// console.log(Tokyo)

// // DUBAI()
// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   generateCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//       console.log(randomNumb);
//       this.cookiesBought.push(randomNumb)
//     }
//   },
//   render: function () {
//     this.generateCookies();
//     let dubaiList = document.getElementById('Dubai');
//     let storeName = document.createElement('h2');
//     storeName.textContent = this.name;
//     dubaiList.appendChild(storeName);
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//   }
// };
// console.log(Dubai)
// Dubai.generateCookies()
// console.log(Dubai)

// // PARIS()
// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   generateCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//       console.log(randomNumb);
//       this.cookiesBought.push(randomNumb)
//     }
//   },
//   render: function () {
//     this.generateCookies();
//     let parisList = document.getElementById('Paris');
//     let storeName = document.createElement('h2');
//     storeName.textContent = this.name;
//     parisList.appendChild(storeName);
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       parisList.appendChild(li);
//     }
//   }
// };
// console.log(Paris)
// Paris.generateCookies()
// console.log(Paris)

// // Lima()
// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   generateCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumb = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//       console.log(randomNumb);
//       this.cookiesBought.push(randomNumb)
//     }
//   },
//   render: function () {
//     this.generateCookies();
//     let limaList = document.getElementById('Lima');
//     let storeName = document.createElement('h2');
//     storeName.textContent = this.name;
//     limaList.appendChild(storeName);
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       limaList.appendChild(li);
//     }
//   }
// };
// console.log(Lima)
// Lima.generateCookies()
// console.log(Lima)
// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();

// // setCookiesPerHour(); {
// //   for (let i = 0; i< hours.length; i==) {
// //     this.cookieSoldPerHour.push(Math.floor(this.cookiesCustomerPerHour[i] * this.avgCookieBought));
// //   }
// // }
// // render() {}

// // let articleElem = document.createElement('article');
// // HTMLlocation.appendChild(articleElem);