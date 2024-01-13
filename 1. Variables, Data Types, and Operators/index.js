/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// DONE Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var text = "Hello, World!";
console.log(text);

// DONE Use the let keyword to define a variable.
// Your code here

let fullName = "Michaella Villamante";
console.log(fullName);

// DONE Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const fname = "Noela";
console.log(fname);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
/*var - variables are function scoped, meaning they are accessible only within the function in which they are defined
let - variables declared with let are exclusively accessible within the block they are defined in, whether it is a function, an if statement, or a loop. 
const - once assigned a value, constants cannot be reassigned or modified*/

// DONE Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

let sum = 5 + 3;
console.log("Addition:", sum);

let difference = 10 - 4;
console.log("Subtraction:", difference);

let product = 3 * 7;
console.log("Multiplication:", product);

let quotient = 15/3;
console.log("Division:", quotient);

// Checkpoint 1.2 What operators did you use?
// Answer: add, subtract, multiply, divide 

// DONE Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

let name1 = "Juliana";
let name2 = "Noela";
let result = name1 + " " + name2;
console.log("Names:", result);

let greetings = "Hello, ";
greetings += "world!";
console.log(greetings);


// Checkpoint 1.3 What operators did you use?
// Answer: + and += for concatenation

// DONE Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

let isTrue = true;
let isFalse = false;

console.log("and", isTrue && isFalse);
console.log("or", isTrue || isFalse);
console.log("not", !isTrue);

// Checkpoint 1.4 What operators did you use?
// Answer: and, or, not


// DONE Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

let a = 20;
let b = 50;

console.log("Equal to:", a == b);
console.log("Not equal to:", a != b);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer:The [] == false evaluates to true due to rules of type coercion
// The empty array is coerced to true as it is considered truthy, leading to comparison true == false
// Using string equality operator '===' is recommended for more precise comparisons