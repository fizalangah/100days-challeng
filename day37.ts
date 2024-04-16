//DAY 37 CHALLENGE;
//Q109;
let currenttime = new Date()

if (currenttime.getHours() < 12) {
    console.log("good morning")
} else{
    console.log("good afternoon")
}

// q110;

function grasesOfstudents(score:number) {
 if (score >= 90 && score < 101 ) {
    console.log("A grade")
 } else if(score >= 70 &&   score < 90)  {
console.log("B grade")
 } else if(score >= 60  && score < 70){
console.log("C grade")
 } else if( score >= 50 && score < 60){
  console.log("D grade")
 }  
 else if( score > 100){
console.log("plz enter valid score")
 }
 else {
    console.log (" F grade")
 }
}
//  console.log(grasesOfstudents(70))

//q111;
function categeraizaAge(age:number) {
    if (age < 13) {
        console.log(" A child")
    } else if(age > 13 && age < 19){
  console.log(" teenager")
    } else{
        console.log("adult")
    }
}
 console.log(categeraizaAge(12))