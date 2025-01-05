const list = document.getElementById('taskList');
let actions = JSON.parse(localStorage.getItem('actions')) || [];
const time = document.getElementById('inputTime');

function addTask(){
    time.style.display = 'block';
    if(time.value == ''){
        console.log('Пажалуйста выберите время');
    } else { 
        const inputData = document.getElementById('taskInput').value;
        actions.push({task:inputData, time:time.value});
        localStorage.setItem('actions', JSON.stringify(actions));
        showTask();
    }
}
const showTask = () => {
    list.innerHTML = '';
    actions.forEach((action, index) => {
        const task = document.createElement('li');
        const time = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = action.completed;

        task.innerHTML = action.task;
        time.innerHTML = action.time;

        checkbox.onchange  = () => deleteTask(index);
        
        if(checkbox.checked){
            deleteTask(index);
        } else {
            console.log('Задача не выполнена');
        }
    
        list.appendChild(task);
        list.appendChild(time);
        list.appendChild(checkbox);
    });
}
function acceptTask(index) {
    actions.splice(index, 1);
    localStorage.setItem('actions', JSON.stringify(actions));
    showTask();
};
showTask();