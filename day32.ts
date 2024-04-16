// day 32 challenge;
//q94;
let myarray:string[] = ["hello","fiza","how","are","you"];
let newarray:number[] = myarray.map(word => word.length)
console.log(newarray)
// q95;
 function filterf(input:number[]) {
    return input.filter(num => num > 10);
 }
 const numberarray:number[] = [12,10,7,15,2,90]
 console.log(filterf(numberarray));

 //96;
 let calculatesum = ((input:number[])=>{
    return input.reduce((i,j) => i+j ,0)
 })
 const sumarray:number[] = [1,2,3,4,5,]
 console.log(calculatesum(sumarray))