const list = document.getElementById('taskList');
let actions = JSON.parse(localStorage.getItem('actions')) || [];
const time = document.getElementById('inputTime');
const input = document.getElementById('taskInput');
const error = document.getElementById('errorMessage');
function addTask(){
    time.style.display = 'block';
    if(time.value == ''){
        console.log('Пажалуйста выберите время');
    }else if(input.value.trim() == ''){
        error.style.display = 'block';
        console.log('Пажалуйста введите задачу');
    } else { 
        const inputData = document.getElementById('taskInput').value;
        actions.push({task:inputData, time:time.value});
        localStorage.setItem('actions', JSON.stringify(actions));
        input.value = '';
        time.value = '';
        time.style.display = 'none';
        error.style.display = 'none';
        showTask();
    }
}
const showTask = () => {

    actions.sort((a, b) => {
        return a.time.localeCompare(b.time);
    });
    list.innerHTML = '';

    actions.forEach((action, index) => {
        const container = document.createElement('div');
        container.classList.add('taskContainer');
        const task = document.createElement('li');
        const time = document.createElement('span');
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.checked = action.completed;

        task.innerHTML = action.task;
        time.innerHTML = action.time;

        checkbox.onchange  = () => acceptTask(index);
        
        if(checkbox.checked){
            acceptTask(index);
        } else {
            console.log('Задача не выполнена');
        }
        list.appendChild(container);
        container.appendChild(checkbox);
        container.appendChild(task);
        container.appendChild(time);
    });
}
function acceptTask(index) {
    actions.splice(index, 1);
    localStorage.setItem('actions', JSON.stringify(actions));
    showTask();
};

showTask();