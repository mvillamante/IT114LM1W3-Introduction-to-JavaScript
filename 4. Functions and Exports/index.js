/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// DONE Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log('Hello there,', name);
}

greet("Ella");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
// function declarations are defined using the 'function' keyword, followed by the function name
// - can be called before they are declared in the code
// function expressions define a function as part of an expression, often by assigning it to a variable
// - can only be called after the expression has been evaluated


// DONE Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here


const calculateArea = function(length, width) {
    return length * width;
};

const length = 10;
const width = 5;
const area = calculateArea(length, width);

console.log(`The area of the rectangle is: ${area}`);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is passed as an argument to another function and
//is executed after the completion of a specific task or at a certain event.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data from server";
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log("Received data:", data);
}

fetchData(handleData);

// DONE Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(arr, modifierFunction) {
    return arr.map(modifierFunction);
}

const numbers = [1,2,3,4,5];

const incrementByOne = function (num) {
    return num + 1;
}

const modNumbers = modifyArray(numbers, incrementByOne);

console.log("Numbers:", numbers);
console.log("Modified Numbers:", modNumbers);

// DONE See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

import { add, PI } from './mathUtils.js';

const sum = add(5, 7);
console.log(sum);

console.log("Value of PI:", PI);

// DONE See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here


import isPalindrome from './isPalindrome.js';

const word = "racecar";
const evalWord = isPalindrome(word);
console.log(evalWord);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// the require function is used to import modules in Node.js
// the module.exports variable is used to define what a module exports, making its functionality available for other modules to use
// 