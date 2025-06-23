const task = [] // iit where todos will go

while(true) {
  //asking for  user input
  let task = prompt("Enter a task (or type 'done' to finish)")
  
  // check if user input is done od Done or DONE
  if (task.toLocaleLowerCase() === 'done') {
    break // If done breaking out of while loop
  }
  task.push(task) //adding usser input to task
}

// To display tasks
console.log("Your Todo List:")

for (let i = 0; i < task.length; i++) {
  console.log(`${i + 1}. ${task[i]}`)
}
// task.forEach((task, index) => {
//   console.log(`${index + 1}. ${task}`)
// });



