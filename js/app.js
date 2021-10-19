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
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
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


        // object for my Seattle Store

        // const seattleStore = document.getElementById('seattleList');
        // let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.',];
        // let cookies = 'cookies';
        // let seattle = {
        //     name: 'Seattle',
        //     min: 23,
        //     max: 65,
        //     avg: 6.3,
        //     cookiesSoldEachHourArray: [],
        //     getRandomCustomers: function () {
        //         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        //     }
        //     , totalcount: 0
        //     , getCookieSalesPerHour: function () {
        //         for (let i = 0; i < hours.length; i++) {
        //             // console.log(hours[i])
        //             let customersThisHour = this.getRandomCustomers();
        //             let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
        //             this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
        //             this.totalcount = this.totalcount + totalCookiesSoldThisHour;
        //             console.log(hours[i], this.cookiesSoldEachHourArray[i]);
        //             console.log(this.totalcount);
        //         }
        //     }
        //     , renderTheList: function () {
        //         this.getCookieSalesPerHour();
        //         // code that will render the lists to the page
        //         // render the LIs inside our UL
        //         let space = document.getElementById('israel');
        //         // console.log(space)
        //         // create 
        //         let h1 = document.createElement('h1');
        //         h1.innerText = this.name;
        //         space.appendChild(h1);
        // // console.log(h1)
        // // console.log(this.name)
        //         let ul = document.createElement('ul');
        //         // console.log(ul)
        //         // update 
        //         for (let i = 0; i < hours.length; i++) {
        //             if (i == 13) {
        //                 // console.log('bang')
        //                 let li = document.createElement('li')
        //                 li.innerText = this.totalcount;
        //                 li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
        //                 let litwo = document.createElement('li')
        //                 litwo.innerText = 'total: ' + this.totalcount;
        //                 ul.appendChild(litwo);
        //                 console.log(litwo)
        //             } else {
        //                 let li = document.createElement('li')
        //                 // console.log(space)
        //                 li.innerText = this.totalcount;
        //                 li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
        //                 ul.appendChild(li);
        //             }
        //         }
        //         console.log(hours.length)
        //         console.log(this.totalcount);
        //         // console.log(li);
        //         //push 
        //         space.appendChild(ul);
        //     }
        // }
        // seattle.renderTheList();
