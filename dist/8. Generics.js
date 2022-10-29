"use strict";
/*
When writing programs, one of the most important aspects is to build reusable components.
This ensures that the program is flexible as well as scalable in the long-term.

1. Generics offer a way to create reusable components.
2. Generics provide a way to make components work with any data type and not restrict to one data type.
So, components can be called or used with a variety of data types.

3. Generics can be applied to
- function's argument
- function's return type
- class fields or methods.
*/
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 4]); //OK
console.log(numArray);
let strArray = getArray(["Orange", "Apple", "Kiwi"]); //OK
console.log(strArray);
// to solve this we should use Generics  
const getArray2 = (items) => {
    return new Array().concat(items);
};
let numberArray1 = getArray2([1, 2, 3]);
let strArray1 = getArray2(["str1", "str2", "str3"]);
// Generic function & Generic interfaces
const addId = (obj) => {
    const id = Math.random().toString();
    return Object.assign(Object.assign({}, obj), { id });
};
const userObj1 = {
    name: "Jack",
    data: {
        meta: "test"
    },
    information: "Jack information"
};
const result = addId(userObj1);
const userObj2 = {
    name: "John",
    data: ["Jane", "Mark", "Rodrigo"],
    information: [1930, 3004]
};
