 //! Casting with as

let xx: unknown = "hello";

console.log((xx as string).length);


//! Casting with <> 

let xxx: unknown = "word";
console.log((<string>xxx).length);

// <> This type of casting will not work with TSX, such as when working on React files.


//! Force casting 
// first to  `unknown` -> target type  ((y as unknown) as targetType)

let i:number = 2;
console.log(((i as unknown) as string).length);








