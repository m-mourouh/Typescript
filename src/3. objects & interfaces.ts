// Objects in typescript

const user1: { name: string; age: number } = {
    name: "John Doe",
    age: 30,
  };
  const user2: { name: string; age: number } = {
    name: "Mark Zukerburg",
    age: 40,
  };
  // use interfaces to avoid repeating object type every time
  // an interface helps us to describe entities
  interface IUser {
    //(I + Name) or (Name + interface) ✔
    name: string;
    age?: number; // age? means that age is optional
    getMessage(): string;
  }
  
  const user3: IUser = {
    name: "John Doe",
    getMessage() {
      return "Hello " + name;
    },
  };
  const user4: IUser = {
    name: "Mark Zukerburg",
    age: 20,
    getMessage() {
      return "Hello " + name;
    },
  };


  // use enums prefix or postfix to know what type is