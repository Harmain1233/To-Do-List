const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

loadTasks(); // loads the previously saved tasks

function addTask() {

    const task = taskInput.value.trim(); /* allows spaces in values */
     

    if (task) {
        createTaskElement(task);

        taskInput.value = ' ';

        saveTasks();

    } else {
        alert('Please enter a task!');
    }

}

addButton.addEventListener('click', addTask);

function createTaskElement(task){

    const listItem = document.createElement('li');

    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteTask';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
   
    /*re - used delete button code for this */
    const checkBox = document.createElement('input'); // Create an input element
checkBox.setAttribute('type', 'checkbox'); // Set its type to 'checkbox'
checkBox.className = 'checkBox'; // Set its class name
 
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'dateInput');
    dateInput.setAttribute('name', 'dateInput');

   listItem.appendChild(dateInput); 



    listItem.appendChild(checkBox); 
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

}

/* allows tasks to be saved to local storage */

function saveTasks(){
    

    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item) {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


/* this function will load tasks that were previously saved 
1. convert tasks into json format 
2. create task element for each value in tasks array and allow it to be loaded */ 
function loadTasks() {
   
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTaskElement);

}