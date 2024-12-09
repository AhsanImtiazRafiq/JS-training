let a = 5;
let b = 3;

const sum = a + b;
console.log("sum", sum);

// Data types

const showInBrowser = document.getElementById("dummy");

dummy?.append(`Some Text from JS , Dynamic number ${sum}`);

outputResult("Normal text", "result goes here");

// Functions
// num1 and num2 are arguments
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const additionResult = add(1, 2);

outputResult(additionResult, "Normal text");

// Exercise: Functions
// Time to practice functions!

// Your task is to define two new functions:

// A function called subtract which takes two numbers as inputs and returns the difference.

// A second function, called stringify, which takes a number as an input and returns a string that includes the number (e.g., "Result: 10" for the input 10).

// The first function (subtract) should be callable like this:

// subtract(12, 10);
// and then return 2 (for this example, where 12 and 10 are passed as values).

// The second function (stringify) should be callable like this:

// stringify(10);
// and then return a string that includes the number - for example "Result: 10".

function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}

function stringify(number) {
  return `Result: ${number}`;
}

subtract(12, 10); //Return 2
stringify(10);
