'use strict';

let Hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
let storeArray = [];

function Store(name, minCustomer, maxCustomer, avg) {
    this.storeName = name;
    this.minimum = minCustomer;
    this.maximum = maxCustomer;
    this.avg = avg;

    this.randomNumOfCustomers = function () {
        return Math.floor(Math.random() * (this.maximum - this.minimum + 1) + this.minimum)
    }

    this.CookiesMadePerHour = function () {
        let storeCookiesArray = []
        for (let i = 0; i < Hours.length; i++) {
            let currentObject = {}
            currentObject.hour = Hours[i];
            currentObject.customers = this.randomNumOfCustomers();
            currentObject.cookies = Math.ceil(currentObject.customers * this.avg);
            storeCookiesArray.push(currentObject)
        }
        return storeCookiesArray
    }

    this.CookiesPerHour = this.CookiesMadePerHour();


    this.getTotal = function () {
        let totalStoreCookies = 0
        for (let i = 0; i < this.CookiesPerHour.length; i++) {
            totalStoreCookies += this.CookiesPerHour[i].cookies;
        }
        return totalStoreCookies
    }

    this.totalStoreCookies = this.getTotal()

    this.update = function () {
        let tableBody = document.querySelector('tbody');
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        let tableName = document.createElement('td');
        tableName.innerText = this.storeName;
        tr.appendChild(tableName);

        for (let i = 0; i < this.CookiesPerHour.length; i++) {
            let hourlyTD = document.createElement('td');
            hourlyTD.setAttribute('class', 'a' + this.CookiesPerHour[i].hour)

            hourlyTD.innerText = this.CookiesPerHour[i].cookies
            tr.appendChild(hourlyTD);
        }

        let Total = document.createElement('td');
        Total.innerText = this.totalStoreCookies;
        tr.appendChild(Total)
    }
}
function TableHead() {
    let thead = document.querySelector('thead');
    let headTR = document.createElement('tr');
    thead.appendChild(headTR);
    let tHeadName = document.createElement('th');
    tHeadName.innerText = 'Store Name: ';
    headTR.appendChild(tHeadName);
    for (let i = 0; i < Hours.length; i++) {
        // let tHeadHour = document.createElement('th');
        let hourTD = document.createElement('td');
        hourTD.innerText = Hours[i];
        headTR.appendChild(hourTD);
    }
    let tHeadTotal = document.createElement('td');
    tHeadTotal.innerText = 'Site Totals';
    headTR.appendChild(tHeadTotal);
}
TableHead();
let seattleStore = new Store('Seattle', 23, 63, 6.3);
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);

seattleStore.update();
tokyoStore.update();
dubaiStore.update();
parisStore.update();
limaStore.update();


function TableFoot() {
    let tfoot = document.querySelector('tfoot');
    let tfootTR = document.createElement('tr');
    tfoot.appendChild(tfootTR);
    let tfootStart = document.createElement('td');
    tfootStart.innerText = 'Total Cookies Needed Per Hour';
    tfootTR.appendChild(tfootStart);

    for (let i = 0; i < Hours.length; i++) {
        console.log(Hours[i]);
        let targetlist = document.querySelectorAll('.a' + Hours[i]);
        let totalHourCookies = 0;
        for (let j = 0; j < targetlist.length; j++) {
            totalHourCookies += parseInt(targetlist[j].innerHTML);
            console.log(totalHourCookies);
        }
        let totalPerHrTD = document.createElement('td');
        totalPerHrTD.innerText = totalHourCookies;
        tfootTR.appendChild(totalPerHrTD);
    }
    let dummyTD = document.createElement('td');
    tfootTR.appendChild(dummyTD);
}
TableFoot();

function handleSubmit(event) {
    event.preventDefault();

    let newStoreCity = event.target.locationCity.value;
    let Min = parseInt(event.target.min.value);
    let Max = parseInt(event.target.max.value);
    let Avg = parseInt(event.target.avg.value);

    let newStore = new Store(newStoreCity, Min, Max, Avg);

    document.getElementById('Total').remove();

    Footers();

    document.getElementById('locationCity').value = '';
    document.getElementById('minCustomers').value = '';
    document.getElementById('maxCustomers').value = '';
    document.getElementById('avgBought').value = '';
}


function Footers() {

    let tr = document.createElement('tr');

    tr.id = 'rowTotal';

    let tdEmpty = document.createElement('td');
    tr.appendChild(tdEmpty);

    let hourlyTotal = 0;
    let grandTotal = 0;

    for (let i = 0; i < Hours.length; i++) {
        hourlyTotal = 0;
        for (let j = 0; j < storeArray.length; j++) {
            hourlyTotal += storeArray[j].cookiesSoldEachHourArray[i];
        }

        grandTotal += hourlyTotal;

        let tdHourlyTotal = document.createElement('td');
        tdHourlyTotal.textContent = hourlyTotal;
        tr.appendChild(tdHourlyTotal);
    }

    let tdGrandTotal = document.createElement('td');
    tdGrandTotal.textContent = grandTotal;
    tr.appendChild(tdGrandTotal);
}

Footers();

newLocationData.addEventListener('submit', handleSubmit);