// day 26 challenge;
//q76;
let perafunction = ((a:number,b:number):number=>{
  return a + b
})

 console.log(perafunction(5,2));

 //q77;
 let greet = ((userName:string = "fiza")=>{
 console.log(`hello ${userName}`)
 })
console.log(greet("tania"));
console.log(greet());

// q78;

const  expression = function(num:number):number {
    console.log(`i an expression function`)
     return (num * num); 
   
};
 
function declearation(num1:number):number {
    console.log(`i am declearation function`)
    return num1 * num1

}

 console.log(expression(4));
 console.log(declearation(4))