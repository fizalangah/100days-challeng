// DAY 42 CHALLENGE;
// //Q124;
// const person = {
//     name: "fiza",
//     getName: function () {
//       return this.name;
//     },
//   };

//   console.log(person.getName());

//   // q125
//   const rectangle1 = {
//     length: 4,
//     width: 6,
//     calculateArea: function () {
//       return this.length * this.width;
//     },
//   };

//   console.log(rectangle1.calculateArea());

//q126;
const myObject = {
  property: "Value",
  outerMethod: function () {
   console.log(this.property);
    const innerMethod = () => {
      console.log(this.property);
    };

    innerMethod();
  },
};
myObject.outerMethod();
