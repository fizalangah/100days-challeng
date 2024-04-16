"use strict";
let car = {
    make: "toyota",
    model: "Carolla",
    year: 20023,
};
console.log(car.make);
console.log(car.model);
console.log(car.year);
// q80;
car.color = "red",
    car.year = 2022;
console.log(car);
//q81;
function obj(input) {
    for (const property in input) {
        console.log(`${property}:${input[property]}`);
    }
}
obj({ make: "toyota", model: "corolla", year: 2022, color: "red" });
