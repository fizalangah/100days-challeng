// DAY 38 CHALLENGE;
//Q112;
let contriess = new Map<string ,string>() ;

contriess.set("USA"  ,"washingtton" ) ;
contriess.set("france" ,"paris") ;
contriess.set("japan","tokiyo")
// console.log(contriess);

//  Q 113;
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
      console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
      console.log("Canada is not in the Map.");
    }
  }
 // console.log(logCapitalOfCanada(contriess))

//q114
let studentID = new Map<number , string>();
studentID.set(1,"Ali") ;
studentID.set(2,"bilawal");
studentID.set(3,"kanwal");

studentID.forEach((student, id) => {
    console.log(`Name : ${student}, ID: ${id}`)
})