// Day 31 challenge;
//q91;
let myfavouritFrruite:string[] = ["mango","banana","apple","orangr"]
myfavouritFrruite.push("peach")
console.log(myfavouritFrruite);
//q92;
let deleteItem = (<T>(arrr:T[]):T |undefined =>    {
 return arrr.pop();
})
const colors:string[] = ["red","blue","black","purple"]
console.log(deleteItem(colors));
console.log(colors);
//q93;
let replaceItem = ((fruits:string[]):void=>{
 const index =  fruits.indexOf("banana");
 if(index === 1) fruits[index] = "mango";
})
const fruits:string[] = ["apple","banana","cherry"]
console.log(replaceItem(fruits))
console.log(fruits);



