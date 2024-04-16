"use strict";
/// DAY 28 CHALLENGE;
//Q 82;
let lengthOFstring = ((input) => {
    return input.length;
});
console.log(lengthOFstring("fiza"));
/// q83;
let uperlowercase = ((input1) => {
    let uperstr = input1.toUpperCase();
    let lovercase = input1.toLowerCase();
    console.log("Uppercase", uperstr, "Lowercase", lovercase);
});
uperlowercase("fiza");
// Q84;;
function replacfunction(sentence) {
    return sentence.replace(/ javascript/g, "typescript");
}
console.log(replacfunction("i love  javascript"));
