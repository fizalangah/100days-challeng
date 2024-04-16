"use strict";
// DAY 33 CHALLENGE;
//Q97;
function tdate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(tdate());
// q98;
function diifnewyear() {
    const today = new Date();
    const newyear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newyear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(diifnewyear(), "days untill new year");
//q99;
function getbirthday(day, month) {
    const today = new Date();
    const year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextbirthday = getbirthday(12, 18);
console.log("next birthday on ", nextbirthday.toLocaleDateString());
