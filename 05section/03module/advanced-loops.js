// forEach

// const fruits = ["Apple", "Bannana", "Cherry"]

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// })

// for of loop (use for arrays and iterable objects)\

// const numbers =[1, 2, 3, 4, 5];

// for (let num of numbers) {
//   console.log(num);
// }

// for in (use for objects)

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
}

for (const key in person) {
  console.log("key =", key);
  console.log(`person[${key}]: val`, person[key]);
}