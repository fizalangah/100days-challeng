// day45 challenge;
//q133;
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// Converts the object into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString);
//q134;
var jsonString2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
// Parses the JSON string back into a JavaScript object
var person2 = JSON.parse(jsonString);
console.log(person);
//q134;
var person1 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
var jsonString1 = JSON.stringify(person, null, 2);
console.log(jsonString);
