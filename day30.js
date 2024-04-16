"use strict";
//DAY 30 CHALLENGE:
//Q88;
let nraerestrounding = ((input) => {
    return Math.round(input);
});
let result = nraerestrounding(9.5);
console.log(result);
//q89;
let trunIntonumber = ((input) => {
    return parseInt(input);
});
let convert = trunIntonumber("123");
console.log(convert);
//q90;
let checkthetype = ((input) => {
    return isNaN(input);
});
console.log(checkthetype("hello"));
console.log(checkthetype(7));
