"use strict";
// primitive data types
Object.defineProperty(exports, "__esModule", { value: true });
// 1: string type variable
var username = "Apex";
// 2: boolean type variables
var isAdmin = true;
// 3: number type variable
var num = 100;
console.log(username + "is the player? : " + isAdmin + " with other " + num);
// Explicit type assignment - mention datatype
var variable_1 = "I am explicit";
// Implicit type assignment - guess datatype
var variable_2 = "I am implicit";
// any datatype
var variable_3 = 10;
console.log("variable_3 : " + variable_3);
variable_3 = "New update";
console.log("variable_3 : " + variable_3);
// undefined datatype
var variable_4;
console.log("variable_4 : " + variable_4);
// function declaration
function addition(num1, num2) {
    return (num1 + num2);
}
console.log("Function addition: " + addition(5, 10));
var variable_5 = { username: "Apex", rollno: 21 };
var variable_6 = { var: "Apex" };
console.log("Check User interface : " + variable_5.username + " & " + variable_5.rollno);
console.log("Check String interface : " + variable_6.var);
var variable_7 = { username: "Apex", rollno: 21 };
console.log("Check inherited User interface : " + variable_7.username + " & " + variable_7.rollno);
// class implementation
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello I am ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var obj = new Person('Apex', 21);
obj.greet();
// module implementation
var MathFunctions_1 = require("./MathFunctions");
console.log("Module Addition : " + (0, MathFunctions_1.add)(10, 5));
console.log("Module Subtraction : " + (0, MathFunctions_1.sub)(10, 5));
console.log("Module Multiplication : " + (0, MathFunctions_1.mul)(10, 5));
console.log("Module Division : " + (0, MathFunctions_1.div)(10, 5));
