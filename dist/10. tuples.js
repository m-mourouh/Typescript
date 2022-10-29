"use strict";
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array
// !define out tuple
let outTuple;
//! initialize it 
outTuple = [1, true, "Typescript"];
// outTuple = [true,1,"Typescript"] // Error (order is important) 
outTuple.push("testing"); //OK
//! Readonly Tuple
// because we can add something to our tuple   outTuple.push("testing") 
//  We have no type safety in our tuple for indexes 3+ 
// so we need to fix the length of our tuple  using readonly 
let ourReadOnlyTuple = [10, true, "Java"];
// ourReadOnlyTuple.push("test");  //Error
//! Named Tuples
// Named tuples allow us to provide context for our values at each index.
let graph = [68.5, 90.9];
// ! Destructuring Tuples  
const [x, y] = graph;
console.log("x", x);
console.log("y", y);
