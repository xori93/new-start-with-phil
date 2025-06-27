// console.log(math.PI); // 3.141592653589793
// console.log(math.E); // 2.718281828459045

//Math.round() rounds a number to the nearest integer
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.3)); // 4


//Math.floor() rounds a number down to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4



//Math.ceil() rounds a number up to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5




//Math.max() returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.max(-1, -2, -3, -4, -5)); // -1



//Math.min() returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.min(-1, -2, -3, -4, -5)); // -5


const nums = [1, 2, 3, 4, 5, 40, 10, 100, 20, 30];
//Math.max() and Math.min() can also be used with arrays using the spread operator
console.log(Math.max(...nums)); // 100
console.log(Math.min(...nums)); // 1
console.log("nums =", ...nums);

//Math.abs() returns the absolute value of a number
//conversion of negative to positive
console.log(Math.abs(-10)); // 10
console.log(Math.abs(-5)); // 5


//Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.123456789

//Math.pow() returns the base to the exponent power, that is, base^exponent
console.log(Math.pow(2, 3)); // 8 (2^3)
