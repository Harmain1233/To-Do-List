document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const taskInput = document.getElementById('taskInput');
    const priority = document.getElementById('priority');
    const taskList = document.getElementById('taskList');
   // const dateInput = document.getElementById('dateInput');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task !== '') {
            createTaskElement(task);
            taskInput.value = '';
        }
    });

    function createTaskElement(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteTask';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        const addSubTask = document.createElement('button');
       addSubTask.className = 'SubButton';
       addSubTask.innerHTML = '<i class="fas fa-list-alt"></i>'; // Added the closing double quote and closing tag


        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.className = 'checkBox';

        const priorityIcon = document.createElement('i');
        priorityIcon.classList.add('fa-solid', 'fa-circle-exclamation');
        

        const priorityColor = priority.value; // Get the selected priority value

        const dateInput = document.getElementById('dateInput');
        const dateValue = dateInput.value; // Get the value of the date input
    
        const dateTextNode = document.createTextNode(dateValue); // Create text node with date value

        // Create text node for the label "Due Date: "
    const dueDateLabel = document.createTextNode('Due Date: ');
          



        // Update the style of the list item based on the selected priority
        switch (priorityColor) {
            case 'highpriority':
                listItem.style.backgroundColor = '#800000';
                break;
            case 'mediumpriority':
                listItem.style.backgroundColor = '#D64545                ';
                break;
            case 'lowpriority':
                listItem.style.backgroundColor = '#FF6347';
                break;
            default:
                listItem.style.backgroundColor = '';
        }

       
        
       
        listItem.appendChild(checkBox);
        taskList.appendChild(listItem);
        listItem.appendChild(dueDateLabel);
        listItem.appendChild(dateTextNode);
        listItem.appendChild(deleteButton);



        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                listItem.style.opacity = '0.5'; // Make the item transparent if checkbox is checked'
               
                alert('Congratulations! You completed a task!');


            } else {
                listItem.style.opacity = '1'; // Restore opacity if checkbox is unchecked
            }
        });

    
    }
});
