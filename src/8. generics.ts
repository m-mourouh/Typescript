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



const getArray = (items: any[]):any[] => {
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4]); //OK
console.log(numArray);
let strArray = getArray(["Orange","Apple","Kiwi"]); //OK
console.log(strArray);

// to solve this we should use Generics  

const getArray2 = <T>(items: T[]):T[] => {
        return new Array<T>().concat(items);
}
let numberArray1 = getArray2<number>([1,2,3]); 
let strArray1 = getArray2<string>(["str1","str2","str3"]); 

// Generic function & Generic interfaces

const addId = <T extends object>(obj: T):T => {
    const id = Math.random().toString(32);
    return {
        ...obj,
        id
    }
}
interface UserObjInterface<T,V> {  //create one make more
    name: string;
    data: T;
    information: V
}

const userObj1: UserObjInterface<{meta: string},string> = {
    name: "Jack",
    data: {
        meta: "test"
    },
    information: "Jack information"
}
const result = addId<UserObjInterface<{meta: string},string>>(userObj1);

const userObj2:UserObjInterface<string[],number[]> = {
        name: "John",
        data: ["Jane","Mark","Rodrigo"],
        information: [1930,3004]
}

