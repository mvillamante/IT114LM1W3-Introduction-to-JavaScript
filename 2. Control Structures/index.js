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

// TODO 2.3 If the number if a multiple of 3, write "fizz".
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
toDisplay = randomNumber % 2 == 0 ? "Even" : "Odd";

console.log("toDisplay:", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: use switch to select one of many blocks of code to be executed

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 0; i < n; i++) {
    console.log(i + 1);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// DONE Use a while loop to display all the values in the list
// Your code here
let i = 0;
let text = "";
while (i < list.length) {
    text += list[i];
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: 

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (let x of list) {
    text += x;
    console.log(x);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (let y in list) {
    text += list[y];
    console.log(y);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach((element) => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

const quotient = numerator / denominator;

try {
    const quotient = numerator / denominator;
    if (denominator == 0) {
        throw Errow("Division by zero Error")
    }
} catch (error) {
    console.log("ERROR");
}