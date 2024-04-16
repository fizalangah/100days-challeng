"use strict";
// q61;
//solution;
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["car"] = 0] = "car";
    vehiclesType[vehiclesType["truck"] = 1] = "truck";
    vehiclesType[vehiclesType["motorcycle"] = 2] = "motorcycle";
})(vehiclesType || (vehiclesType = {}));
console.log(vehiclesType.car);
console.log(vehiclesType.truck);
console.log(vehiclesType.motorcycle);
let information = {
    name: "fiza",
    age: 20,
    courses: ["math", "english", "computerscienc"]
};
console.log(information);
let rectangle = {
    name: "rectangle",
    width: 10,
    height: 20,
};
let circle = {
    name: "circle",
    radius: 5
};
console.log(rectangle);
console.log(circle);
