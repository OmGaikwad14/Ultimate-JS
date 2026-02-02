// Variables
// var | let | const

// Naming Convention.
// firstname
// first_name
// FirstName - Classes
// firstName - (Pref) Cammel Casing

// DataType varName = value; Strongly Typed Languages
// JS --> Loosly typed languages

// var --> Global Scope
// Re-assign
// Kahi bhi access krlo

if (true) {
    var a = 'var is a Global Scop';
}

console.log(a);

var age = 22;
var firstName = 'Om';

console.log(age);

age = 'Om';

console.log(age);

var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

// let --> Local Scope
// Re-assign
// Access sirf khud ke block ke andr

let userAge;

console.log(age);

userAge = 'Om';

console.log(age);

if (true) {
    let b = 'let is a Local Scope';
    console.log(b);
}

// console.log(b); not print because let is a Local Scope

// const --> Always Local Scope
// Values re-assign nhi ho sakti
// Access sirf khud ke block ke andr

const userName = 'Om';

// userName = 'Vishal'; not re-assign

console.log(userName);