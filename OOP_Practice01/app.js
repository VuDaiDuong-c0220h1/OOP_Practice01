let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.toString = function () {
        return "Ngày " + this.day + " tháng " + this.month + " năm " + this.year;
    };

    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDate = function (day, month, year) {
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }
};

let date = new myDate(3, 3, 2020);

let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);

date.setDay(10);
date.setMonth(10);
date.setYear(2010);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);

date.setDate(1, 1, 2000);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
let str = date.toString();
alert(str);


