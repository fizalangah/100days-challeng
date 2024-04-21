
//q148;
//  console.log("before set timeout")
//  setTimeout(() => {
//     console.log(" this message shows after 2 seconds  hello world")
//  },2000);

//q149;
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback executed"); 
// }, 0);
// onsole.log("End");

// q150;
// Synchronous example
console.log("Before synchronous operation");
for (let i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
