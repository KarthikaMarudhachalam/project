// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add Task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task element
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Mark as completed on click
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';

  // Delete task on button click
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
});
