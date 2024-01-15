/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// DONE Display "more than fifty" if randomNumber is more than fify
// Your code here

console.log(randomNumber);
if (randomNumber > 50) {
    console.log("more than fifty")
}

// DONE Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// DONE If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 == 0) {
    console.log("fizz");
}
else if (randomNumber % 5 == 0) {
    console.log("buzz");
}
else if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz");
}
else {
    console.log(randomNumber);
}

let toDisplay = ""
// DONE Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

toDisplay = (randomNumber % 2 == 0) ? "Even" : "Odd";
console.log("toDisplay:", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: switch statement allows you to choose a block of code to execute from a set of predefined options

//Syntax of a switch statement:
/*switch (expression) {
    case value1:
        code to be executed
        break;
    case value2:
        code to be executed
        break;
    default:
        code to be executed if none 
}*/

// DONE Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

for (let i = 1; i <= n; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// DONE Use a while loop to display all the values in the list
// Your code here

let i = 0;
let text = "";
while (i < list.length) {
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
// while - loop condition is evaluated before the loop body is executed.
// do-while - loop body is executed at least once before the loop condition is evaluated.

// DONE Use a for of loop to display all the values in the list
// Your code here

for (const item of list) {
    console.log(item);
}

// DONE Use a for in loop to display all the values in the list
// Your code here

for (const y in list) {
    console.log(y);
}

// DONE Use the for each method of the list to display all its values 
// Your code here

list.forEach((element) => {
    console.log(element);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
// for of - ideal for iterating over values in iterable objects
// for in - typically used for iterating over object properties (not recommended for arrays)
// .forEach - specifically designed for arrays, useful for applying a function to each element in the array

// DONE Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    const result = numerator / denominator;

    if (isNaN(result)) {
        throw new Error("Division by zero error");
    }
    console.log("Result:", result);
} catch (error) {
    if (error instanceof Error && error.message === "Division by zero") {
        console.log("Error: Division by zero");
    } else {
        console.error("Error", error.message);
    }
} finally {
    console.log("cleaning up resources");
}