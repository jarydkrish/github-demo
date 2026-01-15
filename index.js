#!/usr/bin/env node

// Get command-line arguments (skip first two: node and script path)
const args = process.argv.slice(2);

// Check if we have exactly two arguments
if (args.length !== 2) {
  console.log('Usage: node index.js <number1> <number2>');
  console.log('Example: node index.js 5 3');
  process.exit(1);
}

// Parse arguments as numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Validate that both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Error: Both arguments must be valid numbers');
  console.log('Example: node index.js 5 3');
  process.exit(1);
}

// Multiply the numbers
const result = num1 * num2;

// Print the result
console.log(`${num1} * ${num2} = ${result}`);
