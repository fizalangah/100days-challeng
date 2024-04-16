"use strict";
// DAY 23 CHALLENGE;
//  Q67;
let mixedfunction = ((n, m) => {
    return n + Number(m);
});
let mixedsum = mixedfunction(5, "5");
console.log(mixedsum);
//Q68;
let decimalNumbers = ((n1, n2) => {
    return n1 * n2;
});
let productOfdecimalnumbers = decimalNumbers(3.2234, 2.2334);
console.log(Math.round(productOfdecimalnumbers));
// Q69;
let divisionfunction = ((num1, num2) => {
    let qutient = Math.floor(num1 / num2);
    let remiendr = num1 % num2;
    return { qutient, remiendr };
});
console.log(divisionfunction(20, 5));
