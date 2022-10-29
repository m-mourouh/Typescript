"use strict";
// Union : can be of diff types
let pageNumber = "1";
pageNumber = 1;
console.log(pageNumber);
// if we want to fetch userData , the user object is null at the beginning so we need to use
//  union in this case
let userData = null;
const popularTags = ["tea", "coffee"];
const coffeeMilkTags = "coffee milk";
