"use strict";
// day 32 challenge;
//q94;
let myarray = ["hello", "fiza", "how", "are", "you"];
let newarray = myarray.map(word => word.length);
console.log(newarray);
// q95;
function filterf(input) {
    return input.filter(num => num > 10);
}
const numberarray = [12, 10, 7, 15, 2, 90];
console.log(filterf(numberarray));
//96;
let calculatesum = ((input) => {
    return input.reduce((i, j) => i + j, 0);
});
const sumarray = [1, 2, 3, 4, 5,];
console.log(calculatesum(sumarray));
