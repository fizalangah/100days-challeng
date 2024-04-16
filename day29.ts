// Day-29 challenge;
// q85;
function findcode(input:string):number {
    return  input.indexOf("fiza");    
}
let code = findcode("my name is fiza")
console.log(code);
//q86;
let checkword = ((input:string): boolean=>{
 return input.includes("javascript")
}
)
let check =  checkword("i love javascript")
console.log(check);
// q87;
function extracting(input:string):string {
    return input.substring(0,10)
}

console.log(extracting("hello my name is fiza"))