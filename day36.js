"use strict";
// DAY 36 CHALLENGE;
//q106;
function isleapyear(input) {
    return (input % 4 === 0 && input % 100 != 0) ||
        (input % 400 === 0);
}
;
console.log(isleapyear(1900)); // false
console.log(isleapyear(2020)); // true
//q107;
function isdivisibleBy(input) {
    return (input % 2 === 0 && input % 3 === 0);
}
console.log(isdivisibleBy(7)); // false
console.log(isdivisibleBy(6)); // true
//q108;
function compareString(input1, input2) {
    return input1.toLowerCase() === input2.toLowerCase();
}
console.log(compareString("Hellow", "hellow")); // true
console.log(compareString("Word", "world")); // false
