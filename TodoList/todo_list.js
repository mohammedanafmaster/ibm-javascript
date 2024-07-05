let taskInput, taskList, li, tasks = [];
let addTaskBtn = document.getElementById("addTaskBtn");
let clearCompletedBtn = document.getElementById("clearCompletedBtn");
let clearAllTasks = document.getElementById("clearAllTasks");

addTaskBtn.addEventListener('click', () => {
    taskInput = document.getElementById("taskInput").value.trim();

    if(taskInput !== "") {
        tasks.push({text: taskInput});
        taskInput.value = "";
        displayTasks();
    }
})

function displayTasks() {
    taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`
        li.querySelector("input").addEventListener('change', () => toggleTask(index));
        taskList.appendChild(li);
        });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
})

clearAllTasks.addEventListener('click', (index) => {
    tasks.splice(index);
    displayTasks();
})