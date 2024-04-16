/// DAY 28 CHALLENGE;
//Q 82;
 let lengthOFstring = ((input:string)=>{
 return input.length
 })

 console.log (lengthOFstring("fiza"))


 /// q83;
  let  uperlowercase = ((input1:string)=>{
     let uperstr =
     input1.toUpperCase();
     let lovercase = 
     input1.toLowerCase()
 console.log("Uppercase",uperstr,"Lowercase",lovercase)
  })
  uperlowercase("fiza") 

  // Q84;;
  
  function replacfunction(sentence:string) :string{
    return sentence.replace(/ javascript/g,  "typescript")
  }

  console.log(replacfunction("i love  javascript"))
