'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.',];
let cookies = 'cookies';
let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    , totalcount: 0
    , getCookieSalesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(hours[i])
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }
    , renderTheList: function () {
        this.getCookieSalesPerHour();
        // code that will render the lists to the page
        // render the LIs inside our UL
        let space = document.getElementById('israel');
        // console.log(space)
        // create 
        let h1 = document.createElement('h1');
        h1.innerText = this.name;
        space.appendChild(h1);
// console.log(h1)
// console.log(this.name)
        let ul = document.createElement('ul');
        // console.log(ul)
        // update 
        for (let i = 0; i < hours.length; i++) {
            if (i == 13) {
                // console.log('bang')
                let li = document.createElement('li')
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                let litwo = document.createElement('li')
                litwo.innerText = 'total: ' + this.totalcount;
                ul.appendChild(litwo);
                console.log(litwo)
            } else {
                let li = document.createElement('li')
                // console.log(space)
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                ul.appendChild(li);
            }
        }
        console.log(hours.length)
        console.log(this.totalcount);
        // console.log(li);
        //push 
        space.appendChild(ul);
    }
}
seattle.renderTheList();


const TokyoStore = document.getElementById('tokyoList');

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    , totalcount: 0
    , getCookieSalesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(hours[i])
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }
    , renderTheList: function () {
        this.getCookieSalesPerHour();
        // code that will render the lists to the page
        // render the LIs inside our UL
        let space = document.getElementById('israel');
        // console.log(space)
        // create 
        let h1 = document.createElement('h1');
        h1.innerText = this.name;
        space.appendChild(h1);
// console.log(h1)
// console.log(this.name)
        let ul = document.createElement('ul');
        // console.log(ul)
        // update 
        for (let i = 0; i < hours.length; i++) {
            if (i == 13) {
                // console.log('bang')
                let li = document.createElement('li')
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                let litwo = document.createElement('li')
                litwo.innerText = 'total: ' + this.totalcount;
                ul.appendChild(litwo);
                console.log(litwo)
            } else {
                let li = document.createElement('li')
                // console.log(space)
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                ul.appendChild(li);
            }
        }
        console.log(hours.length)
        console.log(this.totalcount);
        // console.log(li);
        //push 
        space.appendChild(ul);
    }
}
tokyo.renderTheList();

const DubaiStore = document.getElementById('dubaiList');

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 2.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    , totalcount: 0
    , getCookieSalesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(hours[i])
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }
    , renderTheList: function () {
        this.getCookieSalesPerHour();
        // code that will render the lists to the page
        // render the LIs inside our UL
        let space = document.getElementById('israel');
        // console.log(space)
        // create 
        let h1 = document.createElement('h1');
        h1.innerText = this.name;
        space.appendChild(h1);
// console.log(h1)
// console.log(this.name)
        let ul = document.createElement('ul');
        // console.log(ul)
        // update 
        for (let i = 0; i < hours.length; i++) {
            if (i == 13) {
                // console.log('bang')
                let li = document.createElement('li')
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                let litwo = document.createElement('li')
                litwo.innerText = 'total: ' + this.totalcount;
                ul.appendChild(litwo);
                console.log(litwo)
            } else {
                let li = document.createElement('li')
                // console.log(space)
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                ul.appendChild(li);
            }
        }
        console.log(hours.length)
        console.log(this.totalcount);
        // console.log(li);
        //push 
        space.appendChild(ul);
    }
}
dubai.renderTheList();

const ParisStore = document.getElementById('parisList');

let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    , totalcount: 0
    , getCookieSalesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(hours[i])
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }
    , renderTheList: function () {
        this.getCookieSalesPerHour();
        // code that will render the lists to the page
        // render the LIs inside our UL
        let space = document.getElementById('israel');
        // console.log(space)
        // create 
        let h1 = document.createElement('h1');
        h1.innerText = this.name;
        space.appendChild(h1);
// console.log(h1)
// console.log(this.name)
        let ul = document.createElement('ul');
        // console.log(ul)
        // update 
        for (let i = 0; i < hours.length; i++) {
            if (i == 13) {
                // console.log('bang')
                let li = document.createElement('li')
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                let litwo = document.createElement('li')
                litwo.innerText = 'total: ' + this.totalcount;
                ul.appendChild(litwo);
                console.log(litwo)
            } else {
                let li = document.createElement('li')
                // console.log(space)
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                ul.appendChild(li);
            }
        }
        console.log(hours.length)
        console.log(this.totalcount);
        // console.log(li);
        //push 
        space.appendChild(ul);
    }
}
paris.renderTheList();

const LimaStore = document.getElementById('limaList');

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    , totalcount: 0
    , getCookieSalesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(hours[i])
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
            this.totalcount = this.totalcount + totalCookiesSoldThisHour;
            console.log(hours[i], this.cookiesSoldEachHourArray[i]);
            console.log(this.totalcount);
        }
    }
    , renderTheList: function () {
        this.getCookieSalesPerHour();
        // code that will render the lists to the page
        // render the LIs inside our UL
        let space = document.getElementById('israel');
        // console.log(space)
        // create 
        let h1 = document.createElement('h1');
        h1.innerText = this.name;
        space.appendChild(h1);
// console.log(h1)
// console.log(this.name)
        let ul = document.createElement('ul');
        // console.log(ul)
        // update 
        for (let i = 0; i < hours.length; i++) {
            if (i == 13) {
                // console.log('bang')
                let li = document.createElement('li')
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                let litwo = document.createElement('li')
                litwo.innerText = 'total: ' + this.totalcount;
                ul.appendChild(litwo);
                console.log(litwo)
            } else {
                let li = document.createElement('li')
                // console.log(space)
                li.innerText = this.totalcount;
                li.innerText = hours[i] + ': ' + this.cookiesSoldEachHourArray[i];
                ul.appendChild(li);
            }
        }
        console.log(hours.length)
        console.log(this.totalcount);
        // console.log(li);
        //push 
        space.appendChild(ul);
    }
}
lima.renderTheList();


