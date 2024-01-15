/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// DONE Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

const squares = numbers.map(num => num * num);

console.log("Array with Squares:", squares);

// DONE Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

const evenNum = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNum);

// DONE Use the reduce method to find the sum of all numbers in the array
// Your code here

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

// DONE Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

const upWords = words.map(word => word.toUpperCase());

console.log("Uppercase Letters:", upWords);
// DONE Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

const randWords = ["grape", "banana", "date", "apple"];

const longWords = randWords.filter(word => word.length > 4);

console.log("More than four letters", longWords);

// DONE Use the reduce method to concatenate all words in the array into a single string
// Your code here

const concatString = randWords.reduce((accumulator, currentWord) => accumulator + currentWord, '');
console.log("Words:", concatString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// map - transforms each element of an array based on a provided function
// filter - creates a new array containing only the elements that satisfy a provided function
// reduce - accumulates the elements of an array into a single value by applying a function iteratively