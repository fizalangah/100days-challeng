"use strict";
// day35 challenge;
//q103;
let randombooleanvalue = (() => {
    return Math.random() > 0.5;
});
console.log(randombooleanvalue());
// q104;
let generatehexadecimal = (() => {
    const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(2, '0');
    return color;
});
console.log(generatehexadecimal());
//105;
let dice = (() => {
    return Math.floor(Math.random() * 6) + 1;
});
console.log(dice());
