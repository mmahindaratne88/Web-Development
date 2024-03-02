// Selectors
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to update tasks in local storage
const updateLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Function to render tasks
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${task.title}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
};

// Function to add a new task
const addTask = (title) => {
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  updateLocalStorage();
  renderTasks();
};

// Function to edit a task
const editTask = (index) => {
  const newTitle = prompt("Enter new title:");
  if (newTitle && newTitle.trim() !== "") {
    tasks[index].title = newTitle.trim();
    updateLocalStorage();
    renderTasks();
  } else {
    alert("Title cannot be empty!");
  }
};

// Function to delete a task
const deleteTask = (index) => {
  const confirmation = confirm("Are you sure you want to delete this task?");
  if (confirmation) {
    tasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
  }
};

// Form submit event listener
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = taskInput.value.trim();
  if (taskTitle !== "") {
    addTask(taskTitle);
    taskInput.value = "";
  } else {
    alert("Task title cannot be empty!");
  }
});

// Initial rendering of tasks
renderTasks();
