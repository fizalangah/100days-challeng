"use strict";
// ...DAY 49 CHALLENGE;
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// function callbackFunction(callback:(input1:number,input2:number) => void,
// input1:number,input2:number)
// :void {
//    callback(input1,input2) 
// }
// const add = (a:number,b:number) =>{
//     console.log(a + b)
// }
// callbackFunction(add,5,6)
// //Question 146: Show an example of a callback function used to filter an array of numbers.
//  const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
//  const filterNumbers:number[] = numbers.filter((numb)=> numb > 5)
//  console.log(filterNumbers);
//Question 147: Explain how to handle errors in a callback pattern.
// Function that uses a callback pattern, including error handling
function fetchData(callback) {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
        console.error(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
