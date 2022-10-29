"use strict";
// Working with Typescript in DOM 
const inputElement1 = document.querySelector('input');
console.log(inputElement1.value);
// const inputElement2 = document.querySelector('input');
// console.log((inputElement2 as any).value);  //the worst fix using any
//! AddEventListener 
const inputElement3 = document.querySelector('input'); // use ! if u are sure that elem cannot be null 
inputElement3.addEventListener("blur", (event) => {
    const target = event.target;
    console.log(target.value);
});
