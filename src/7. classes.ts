//! Classes
// Classed are sugar around prototypes
// public : by default and means a property or a method is visible outside of its class
// protected : visible inside class and its children
// private: visible only inside class
// readonly : to create constants in our class
// static : means that an a property or method belongs only to class not to the instance
// classed & interfaces
// interfaces : to share the same thing

interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  private firstName: string;
  private lastName: string;
  readonly unchangeableName: string;
  static maxLevel: "Dragon user"; // belongs to class User and its constant

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  static fun():void{
    console.log("Typescript is funny");
  }

  // setUnchangeableName():void {
  //     this.unchangeableName =  "foo";  //this will raise an error  because unchangeableName is readonly
  // }
}

const user = new User("John", "Doe");

console.log(user.getFullName());

// access static property 
console.log(User.maxLevel);
User.fun();

// inheritance 

class Admin extends User {
  private editor: string;
  constructor(firstName: string, lastName: string, editor: string){
      super(firstName,lastName);
      this.editor = editor
  }
  setEditor(editor: string):void{
    this.editor = this.editor;
  }
  getEditor():string{
    return this.editor;
  }
}

const admin = new Admin("Marie","Mary","Richard");
console.log(admin.setEditor("Juane"));
console.log(admin.getEditor());
