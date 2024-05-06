// // comperisions ;
// // numeric comparisions
// console.log( 2 > 1 );  // true (correct)
// console.log( 2 == 1 ); // false (wrong)
// console.log( 2 != 1 ); // true (correct)


// //string comparision
// console.log( 'Z' > 'A' ); // true
// console.log( 'Glow' > 'Glee' ); // true
// console.log( 'Bee' > 'Be' ); // true

// // comparision with null and undefined
// console.log( null === undefined ); // false
// console.log( null == undefined ); // true

// conditional operators;
let age = 5
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }
console.log(message)