// ask user to type in a number
let num1 = prompt("Enter First Number:");
let num2 = prompt("Enter Second Number:");

// turns string in a number
num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log(typeof num1, typeof num2);

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`)
console.log(`Diff: ${diff}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);