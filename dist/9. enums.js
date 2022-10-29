"use strict";
// Object
const statues = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statues.inProgress); // 1  
// Enums  
// Enums can be used as value or data type
var StatuesEnum;
(function (StatuesEnum) {
    StatuesEnum[StatuesEnum["notStarted"] = 0] = "notStarted";
    StatuesEnum[StatuesEnum["inProgress"] = 1] = "inProgress";
    StatuesEnum[StatuesEnum["done"] = 2] = "done"; //index: 2
})(StatuesEnum || (StatuesEnum = {}));
//! adding values to Statues enum
// enum StatuesEnum {
//     NotStarted = "notStarted",        
//     InProgress = "inProgress",        
//     Done = "done"               
// }
console.log(StatuesEnum.inProgress); // 1
// using enums as data type
let processStatus = StatuesEnum.inProgress;
;
// Use Enums for constants in your application
// use enums prefix or postfix to know what type is
// Big letter for enum Name and properties inside
// ! There are 2 Enum types : numeric (default) & string enums
// Numeric Enum Default  starts with 0 
var CardinalDirectionsEnum;
(function (CardinalDirectionsEnum) {
    CardinalDirectionsEnum[CardinalDirectionsEnum["North"] = 0] = "North";
    CardinalDirectionsEnum[CardinalDirectionsEnum["East"] = 1] = "East";
    CardinalDirectionsEnum[CardinalDirectionsEnum["South"] = 2] = "South";
    CardinalDirectionsEnum[CardinalDirectionsEnum["West"] = 3] = "West";
})(CardinalDirectionsEnum || (CardinalDirectionsEnum = {}));
;
console.log(CardinalDirectionsEnum.East); // 1
// Numeric Enum Initialized  
var CardinalDirectionsEnum2;
(function (CardinalDirectionsEnum2) {
    CardinalDirectionsEnum2[CardinalDirectionsEnum2["North"] = 1] = "North";
    CardinalDirectionsEnum2[CardinalDirectionsEnum2["East"] = 2] = "East";
    CardinalDirectionsEnum2[CardinalDirectionsEnum2["South"] = 3] = "South";
    CardinalDirectionsEnum2[CardinalDirectionsEnum2["West"] = 4] = "West";
})(CardinalDirectionsEnum2 || (CardinalDirectionsEnum2 = {}));
;
console.log(CardinalDirectionsEnum.East); // 2
// Numeric Enum fully Initialized  
var StatusCodesEnum;
(function (StatusCodesEnum) {
    StatusCodesEnum[StatusCodesEnum["NotFound"] = 404] = "NotFound";
    StatusCodesEnum[StatusCodesEnum["Success"] = 200] = "Success";
    StatusCodesEnum[StatusCodesEnum["Accepted"] = 202] = "Accepted";
    StatusCodesEnum[StatusCodesEnum["BadRequest"] = 400] = "BadRequest";
})(StatusCodesEnum || (StatusCodesEnum = {}));
;
console.log(StatusCodesEnum.Success); // 2
// String Enum   //more readable
var CardinalDirectionsEnum3;
(function (CardinalDirectionsEnum3) {
    CardinalDirectionsEnum3["North"] = "North";
    CardinalDirectionsEnum3["East"] = "East";
    CardinalDirectionsEnum3["South"] = "South";
    CardinalDirectionsEnum3["West"] = "West";
})(CardinalDirectionsEnum3 || (CardinalDirectionsEnum3 = {}));
;
console.log(CardinalDirectionsEnum3.East); // "East";
