const math = require('./math');
const secret = require('./secret');

console.log('Start calculations');

const a = 5;
const b = 0;

console.log(`Add: ${math.add(a, b)}`);
console.log(`Subtract: ${math.subtract(a, b)}`);
console.log(`Divide: ${math.divide(a, b)}`);

const userInput = "console.log('This is unsafe')";
math.evalUserInput(userInput); // ❌ Vulnerability triggered
