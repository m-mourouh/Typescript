"use strict";
//! Classes
// Classed are sugar around prototypes
// public : by default and means a property or a method is visible outside of its class
// protected : visible inside class and its children
// private: visible only inside class
// readonly : to create constants in our class
// static : means that an a property or method belongs only to class not to the instance
// classed & interfaces
// interfaces : to share the same thing
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    static fun() {
        console.log("Typescript is funny");
    }
}
const user = new User("John", "Doe");
console.log(user.getFullName());
// access static property 
console.log(User.maxLevel);
User.fun();
// inheritance 
class Admin extends User {
    constructor(firstName, lastName, editor) {
        super(firstName, lastName);
        this.editor = editor;
    }
    setEditor(editor) {
        this.editor = this.editor;
    }
    getEditor() {
        return this.editor;
    }
}
const admin = new Admin("Marie", "Mary", "Richard");
console.log(admin.setEditor("Juane"));
console.log(admin.getEditor());
