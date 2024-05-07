 //while loop;
 let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// do while loop;
let j = 0;
do {
  console.log( i );
  i++;
} while (j < 3);

// for loop;
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }

  // switch statement;
  let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}