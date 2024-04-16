// q61;
//solution;
 enum  vehiclesType  { car , truck , motorcycle
 
 }
 console.log(vehiclesType.car)
 console.log(vehiclesType.truck)
 console.log(vehiclesType.motorcycle);

 ///q62;
 //solution;
  interface bluprint {
    name :string,
    age: number,
    courses : string[]
  }
  let information:bluprint = {
    name : "fiza",
    age : 20,
     courses: ["math","english","computerscienc"]
  }
  console.log(information)

  // q63;
  //solution;
   type shap = { name:"circle"| "rectangle",radius?:number,width?:number,height?:number} ;
   let rectangle:shap = {
    name: "rectangle",
    width: 10,
    height: 20,
   }

   let circle:shap = {
    name: "circle",
    radius: 5
   }
   console.log(rectangle);
   console.log(circle);