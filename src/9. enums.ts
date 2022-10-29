// Object
const statues = {
    notStarted: 0,
    inProgress: 1,
    done: 2
}
console.log(statues.inProgress); // 1  

// Enums  
// Enums can be used as value or data type
enum StatuesEnum {
    notStarted,        //index: 0
    inProgress,        //index: 1
    done               //index: 2
}
//! adding values to Statues enum
// enum StatuesEnum {
//     NotStarted = "notStarted",        
//     InProgress = "inProgress",        
//     Done = "done"               
// }
console.log(StatuesEnum.inProgress)  // 1

// using enums as data type
let processStatus: StatuesEnum = StatuesEnum.inProgress ;

// processStatus = "Test";   //Error 

//! Enums with interfaces 
interface Task {
    id: string ;
    status: StatuesEnum
};


// Use Enums for constants in your application
// use enums prefix or postfix to know what type is
// Big letter for enum Name and properties inside

// ! There are 2 Enum types : numeric (default) & string enums

// Numeric Enum Default  starts with 0 

enum CardinalDirectionsEnum {
    North,    //0
    East,      //1
    South,
    West
};
console.log(CardinalDirectionsEnum.East);  // 1

// Numeric Enum Initialized  
enum CardinalDirectionsEnum2 {
    North = 1, 
    East,      
    South,
    West
};
console.log(CardinalDirectionsEnum.East);  // 2

// Numeric Enum fully Initialized  
enum StatusCodesEnum {
    NotFound = 404, 
    Success = 200,      
    Accepted = 202 ,
    BadRequest = 400
};
console.log(StatusCodesEnum.Success);  // 2

// String Enum   //more readable
enum CardinalDirectionsEnum3 {
    North = "North", 
    East = "East",      
    South = "South",
    West = "West"
};
console.log(CardinalDirectionsEnum3.East)  // "East";