"use strict";
// Day 31 challenge;
//q91;
let myfavouritFrruite = ["mango", "banana", "apple", "orangr"];
myfavouritFrruite.push("peach");
console.log(myfavouritFrruite);
//q92;
let deleteItem = ((arrr) => {
    return arrr.pop();
});
const colors = ["red", "blue", "black", "purple"];
console.log(deleteItem(colors));
console.log(colors);
//q93;
let replaceItem = ((fruits) => {
    const index = fruits.indexOf("banana");
    if (index === 1)
        fruits[index] = "mango";
});
const fruits = ["apple", "banana", "cherry"];
console.log(replaceItem(fruits));
console.log(fruits);
