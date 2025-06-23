 // FOR LOOP
//  for (let i = 0; i <= 5; i++) {
//   console.log("Iternation:", i);
//  }

// const colors = ["Red", "Green", "Blue", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//   console.log("i =", i);
//   console.log("colors[i] =", colors[i]);
// }

// WHILE LOOP

// let count = 0;

// while (count <= 5) {
//   console.log("count =", count);
//   count++;
// }

//Usr input until correct answer
// let userInput;

// while(userInput !== "yes") {
//   userInput = prompt("Type 'yes' to continue");
// }

// console.log("ypu enter 'yes'");

//DO... WHILE (executes atleast once)
// let number = 0;

// do{
//   console.log("number =", number);
//   number++
// } while (number <= 5);

let num;

do {
  num = prompt("Enter a number greater than 10:");
} while(num <= 10);

console.log("Thank you.")