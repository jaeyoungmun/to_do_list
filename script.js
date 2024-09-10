let tasks = [];
let completedTasks = [];

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';

    if (tabName === 'todo') {
        displayTasks();
    } else if (tabName === 'completed') {
        displayCompletedTasks();
    }
}

function addTask() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const memoInput = document.getElementById('memo');

    if (taskInput.value && dueDateInput.value) {
        const task = {
            title: taskInput.value,
            dueDate: dueDateInput.value,
            memo: memoInput.value,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        dueDateInput.value = '';
        memoInput.value = '';
        showTab('todo');
    } else {
        alert('할일과 기한은 필수입니다.');
    }
}

function displayTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.title} (기한: ${task.dueDate})`;
        li.onclick = () => completeTask(index);
        todoList.appendChild(li);
    });
}

function completeTask(index) {
    const completedTask = tasks.splice(index, 1)[0];
    completedTask.completed = true;
    completedTasks.push(completedTask);
    displayTasks();
    displayCompletedTasks();
}

function displayCompletedTasks() {
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = '';
    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.title} (기한: ${task.dueDate})`;
        completedList.appendChild(li);
    });
}
