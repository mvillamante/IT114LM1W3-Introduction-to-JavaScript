/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// DONE Get the first, 5th, and last items in the numbers array.
// Your code here

const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);

// DONE calculate the min, max, and the average of the numbers array
// Your code here

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
const aveValue = sum / numbers.length;

console.log("Minimum:", minValue);
console.log("Maximum:", maxValue);
console.log("Average:", aveValue);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: list can contain elements of different types, while arrays typically have a more consistent data type.

// DONE Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 3,
    numberOfStudents: 40
}

console.log(IT114L)

// DONE Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

const IT114Lcourse = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 3,
    numberOfStudents: 40,
    profName: "Professor Job Lipat" 
}

console.log("Professor Name:", IT114Lcourse.profName);

// DONE Declare and array of objects with information about the courses you are taking this term
// Your code here

const termCourses = [
    {
        courseCode: "CS107",
        name: "Information Management",
        units: 2,
        profName: "Professor Dahlia De Mesa"
    },
    {
        courseCode: "CS107L",
        name: "Information Management (Laboratory)",
        units: 1,
        profName: "Professor Adomar Ilao"
    }, 
    {
        courseCode: "CS120",
        name: "Structure of Programming Languages",
        units: 3,
        profName: "Professor Aurelia Delos Santos"
    },
    {
        courseCode: "HUM039",
        name: "Ethics",
        units: 3,
        profName: "Professor Jomar Ebron"
    },
    {
        courseCode: "IT114",
        name: "Web Systems and Technologies",
        units: 2,
        profName: "Professor Adomar Ilao"
    }, 
    {
        courseCode: "IT114L",
        name: "Web Systems and Technologies (Laboratory)",
        units: 1,
        profName: "Professor Job Lipat"
    },
    {
        courseCode: "IT133",
        name: "Technopreneurship",
        units: 3,
        profName: "Professor Ian Kikuchi"
    },
    {
        courseCode: "SS036",
        name: "Science, Technology, and Society",
        units: 3,
        profName: "Professor Cecille Barrera"
    }
];

console.log(termCourses)


// DONE Calculate the total number of units you are taking this term using the array of objects.
// Your code here

let totalUnits = 0;
for (const course of termCourses) {
    totalUnits += course.units;
}

console.log("Total Units for This Term:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of Javascript objects in Python is Dictionaries.
// JS - use dot or bracket notation , Python - use square brackets
// JS - {key: value} syntax, Python - {"key": value} syntax
// JS - object keys can be strings or symbols, Python - strings, integers, or tuples

// DONE Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let newArray = [...numbers, 70];
console.log("New Array:", newArray);

// DONE Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const {courseCode, units, ...rest } = IT114Lcourse;
const extractInfo = { courseCode, units };
console.log("Extracted Object:", extractInfo);

