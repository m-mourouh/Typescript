"use strict";
//! Casting with as
let xx = "hello";
console.log(xx.length);
//! Casting with <> 
let xxx = "word";
console.log(xxx.length);
// <> This type of casting will not work with TSX, such as when working on React files.
//! Force casting 
// first to  `unknown` -> target type  ((y as unknown) as targetType)
let i = 2;
console.log(i.length);
