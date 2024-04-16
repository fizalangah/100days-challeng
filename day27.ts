// Day 27 chalenge
// q79;
   interface  cardata {
    make: string,
    model: string,
    year : number,
    color?: string
   }
let car:cardata =  {
    make: "toyota",
    model: "Carolla",
    year: 20023,
}
console.log(car.make)
console.log(car.model)
console.log(car.year)
// q80;

car.color = "red",
car.year = 2022
console.log(car)

//q81;

 function obj(input:any) {
      for (const property in input) {
        console.log(`${property}:${input[property]}`)
    }
 }
 obj({make: "toyota",model: "corolla",year: 2022,color: "red"})