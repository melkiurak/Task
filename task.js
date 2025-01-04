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
        const buttonDelete = document.createElement('button');
        task.innerHTML = action.task;
        time.innerHTML = action.time;
        buttonDelete.innerHTML = 'Удалить';
        buttonDelete.onclick = () => deleteTask(index);
        list.appendChild(task);
        list.appendChild(time);
        list.appendChild(buttonDelete);
    });
}
function deleteTask(index) {
    actions.splice(index, 1);
    localStorage.setItem('actions', JSON.stringify(actions));
    showTask();
};
showTask();