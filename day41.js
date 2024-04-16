"use strict";
// DAY 41 CHALENGE;
// //Q121;
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//       continue  
//     }
//     console.log(i)
// }
// //q122;
//   let count = 10;
//   while(count > 0){
// if(count === 5){
//  break;
// }
// console.log(count)
// count --
//   }
//q123;
function findvowels(str) {
    let vowels = "aeioAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log("first vowel", char);
            break;
        }
        console.log(char);
    }
}
findvowels("fiza");
