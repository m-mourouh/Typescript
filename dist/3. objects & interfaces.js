"use strict";
// Objects in typescript
const user1 = {
    name: "John Doe",
    age: 30,
};
const user2 = {
    name: "Mark Zukerburg",
    age: 40,
};
const user3 = {
    name: "John Doe",
    getMessage() {
        return "Hello " + name;
    },
};
const user4 = {
    name: "Mark Zukerburg",
    age: 20,
    getMessage() {
        return "Hello " + name;
    },
};
// use enums prefix or postfix to know what type is
