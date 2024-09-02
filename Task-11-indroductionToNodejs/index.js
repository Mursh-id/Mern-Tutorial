// index.js

const { add, subtract, divide } = require('./utils');


const num1 = 10;
const num2 = 5;

console.log(`Add: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtract: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Divide: ${num1} / ${num2} = ${divide(num1, num2)}`);
