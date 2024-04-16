// Day 39 CHALLENGE;
//Q115;
function days(daynum: number): void {
  switch (daynum) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("monday");
      break;
    case 3:
      console.log("tuesday");
      break;
    case 4:
      console.log("wednesday");
      break;
    case 5:
      console.log("thursday");
      break;
    case 6:
      console.log("friday");
      break;
    case 7:
      console.log("saturday");
      break;

    default:
      break;
  }
}
days(6);
// q116;
function season(month: number) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("summer");
      break;
    case 9:
    case 10:
    case 11:
    case 12:
      console.log("fall");
      break;
    default:
      console.log("invalid month");
      break;
  }
}

season(7);

//q117;
function grades(grad: string) {
  switch (grad) {
    case "A":
      console.log("Exlente");
      break;
    case "B":
      console.log(" Very Good");
      break;
    case "C":
      console.log("Good");
      break;
    case "D":
      console.log("not bad");
      break;
    case "F":
      console.log("fail");
      break;

    default:
    console.log("invalid grad")    
      break;
  }
}

grades("C")
