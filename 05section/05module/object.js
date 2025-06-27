/*

OBJECT  stores related data as a key value pair

*/

const person = {
  name: "Alice",
  age: 20,
  city: "New York"
}


person.country = "USA"; // add a new property

person.age = 30; //update a property

delete person.city // remove property


// loop through an object

for (const ket in person) {
  console.log("key =", key);
  console.log("value =", person[key]);
}