// day45 challenge;
//q133;
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  }; 
  const jsonString = JSON.stringify(person);
  console.log(jsonString);
  //q134;
  var jsonString2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
var person2 = JSON.parse(jsonString);
console.log(person);
//q134;
const person1 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  const jsonString1 = JSON.stringify(person, null, 2); 
  console.log(jsonString);