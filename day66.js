"use strict";
/***************
 * UNION TYPES *
 ***************/
// let myVar: string | number;
// myVar = "Hello"; // Valid assignment
// console.log(myVar)
// myVar = 42;       // Valid assignment
// console.log(myVar)
// /*****************
//  * LITERAL TYPES *
//  *****************/
// let direction: "left" | "right" | "up" | "down";
// function setColor(color: "red" | "green" | "blue") {
//     // ...
// }
// /******************
//  * NULLABLE TYPES *
//  ******************/
let username = "Glicher"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
