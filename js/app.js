'use strict';
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.',];
let storeArray =[];
function Store(name, minCustomer, maxCustomer, avg) {
    this.storeName = name;
    this.minium = minCustomer;
    this.max = maxCustomer;
    this.avg = avg;
    storeArray.push(this);
    this.RandomCustomers = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }


    this.CookieSalesPerHour = function () {
        for (let i = 0; i < hours.length; i++) {
            let object = {}
            object.hour = hours[i];
            object.customersThisHour = this.getRandomCustomers();
            object.totalCookiesSoldThisHour = Math.ceil(object.customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }

}
let seattleStore = new Store('Seattle', 23, 63, 6.3);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);
console.log(Store);
console.log(storeArray);
for (let i = 0; i < storeArray.length; i++) {
    storeArray[i];
}

this.render = function () {
    let space = document.getElementById('israel');
}

