/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// DONE Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x = 10;
var y = 6;
var prod = x * y;
console.log(prod);


// DONE Use the let keyword to define a variable.
// Your code here

let a = 10;
console.log(a);

// DONE Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const fname = "Michaella";
const lname = "Villamante";
console.log(fname,lname);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
/*var - variables are function scoped, meaning they are accessible only within the function in which they are defined
let - variables declared with let are exclusively accessible within the block they are defined in, whether it is a function, an if statement, or a loop. 
const - once assigned a value, constants cannot be reassigned or modified*/

// DONE Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

let num1 = 4;
let num2 = 2;
let answer = num1 ** num2;
console.log(answer);

let ans = (100 + 500) * num1;
console.log(ans);

let n1 = 10;
let n2 = 8;
let ntotal = n1 % n2;
console.log(ntotal);

// Checkpoint 1.2 What operators did you use?
// Answer: exponentiation, addition, multiplication, modulus

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let name1 = "Juliana";
let name2 = "Noela";
let result = name1 + " " + name2;
let alp = name1 < name2;
console.log(alp);
console.log(result);


// Checkpoint 1.3 What operators did you use?
// Answer: + to concatenate, less than

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

let cat = true;
let dog = false;

let animal1 = cat && dog;
let animal2 = cat || dog;
console.log(animal1);
console.log(animal2);

// Checkpoint 1.4 What operators did you use?
// Answer: && and ||


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const color = ["red", "orange", "yellow", "green"];
console.log("colors");
console.log(1 in color);
console.log(0 in color);
console.log("green" in color);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here