const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Declaring and Manipulating Arrays

//console.log(fruits[0])
// fruits[1] ="Blueberry" //Adds/assign a new value to the array


//Array Methods

// fruits.push("Mango"); //Adds a new value at the end of an array

// fruits.pop(); //removes the last value of an array

// fruits.shift() //removes the first element of the array

// fruits.unshift("Grape") // adds a new element at the begining



/*  

Splice - add or remove elements

*/

// fruits.splice(1, 1, "peach"); // add a new element

// fruits.splice(1, 2) // removed elements



/* 

MAP

*/

const numbers = [1, 2, 3, 4, 5];
console.log("numbers =", numbers);
const doubled = numbers.map(num => num * 2);
console.log("doubled =", doubled );



/*

FILTER gets specific elemnts

*/

// const evenNumbers = numbers.filter(num => % 2 === 0);
