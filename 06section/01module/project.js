const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  cont taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.classList.add("task");

  // add  CLick event listener to remove task
  taskItem.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  })

  taskList.appendChild(taskItem);
  taskInput.value = ""; // clear input field
}