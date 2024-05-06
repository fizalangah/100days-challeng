// logical operators;
 
//OR; ||;
console.log( 1 || 0 ); // 1 (1 is truconsole.log
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy vaconsole.log
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//AND &&;
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

//!(NOT);
console.log( !true ); // false
console.log( !0 ); // true