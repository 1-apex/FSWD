// primitive data types

// 1: string type variable
var username: string = "Apex";

// 2: boolean type variables
var isAdmin: boolean = true;

// 3: number type variable
var num: number = 100;

console.log(username + "is the player? : " + isAdmin + " with other " + num);

// Explicit type assignment - mention datatype
var variable_1: string = "I am explicit";

// Implicit type assignment - guess datatype
var variable_2 = "I am implicit";

// any datatype
var variable_3: any = 10;
console.log("variable_3 : " + variable_3);
variable_3 = "New update";
console.log("variable_3 : " + variable_3);

// undefined datatype
var variable_4: undefined;
console.log("variable_4 : " + variable_4);

// function declaration
function addition(num1: number, num2: number): number {
    return (num1 + num2);
}
console.log("Function addition: " + addition(5, 10));

// interface implementation 
interface checkUser {
    username: String;
    rollno: number;
}
interface checkString {
    var: String;
}
var variable_5: checkUser = { username: "Apex", rollno: 21 };
var variable_6: checkString = { var: "Apex" };
console.log("Check User interface : " + variable_5.username + " & " + variable_5.rollno);
console.log("Check String interface : " + variable_6.var);

// interface with inheritance
interface A {
    username: String;
}
interface B extends A {
    rollno: number;
}
var variable_7: B = { username: "Apex", rollno: 21 };
console.log("Check inherited User interface : " + variable_7.username + " & " + variable_7.rollno);

// class implementation
class Person {
    constructor(public name: String, public age: number) {}

    public greet() : void {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
    }   
}
var obj = new Person('Apex', 21);
obj.greet();

// module implementation
import {add, sub, mul, div} from './MathFunctions';
console.log("Module Addition : " + add(10, 5));
console.log("Module Subtraction : " + sub(10, 5));
console.log("Module Multiplication : " + mul(10, 5));
console.log("Module Division : " + div(10, 5));
