/*  
const buttonTaskAdd = document.getElementById('buttonAddTask');
const task = document.querySelector('.AddTask');
const inputTask = document.getElementById('inputTask');
const listTask = document.getElementById('Task');

let tasks = JSON.parse(localStorage.getItem('task')) || [];
const NewTask = () => {
    task.style.display = 'block' ;
};
const closeTask = () => {
    task.style.display = 'none';
};
function addTaskToList(task, index) {
    let newli = document.createElement('li');
    newli.innerHTML = task;

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Удалить'; 

    let buttonChange = document.createElement('button');
    buttonChange.innerHTML = 'Изменить задачу';

    newli.appendChild(buttonDelete); 
    newli.appendChild(buttonChange);
    listTask.appendChild(newli);

    buttonDelete.addEventListener('click', () => {
        newli.remove();
        tasks = tasks.filter(t => t !== task)
        localStorage.setItem('task', JSON.stringify(tasks)); 
    });

    buttonChange.addEventListener('click', () => {
        let inputChange = document.createElement('input');
        inputChange.value = task; 
        newli.appendChild(inputChange);

        let buttonSave = document.createElement('button');
        buttonSave.innerHTML = 'Сохранить';
        newli.appendChild(buttonSave);

        buttonSave.addEventListener('click', () => {
            let TaskChange = inputChange.value;  
            tasks[index] = TaskChange;  
            localStorage.setItem('task', JSON.stringify(tasks));
            newli.innerHTML = TaskChange;  
            newli.appendChild(buttonDelete); 
            newli.appendChild(buttonChange); 
        });
    });
}
const deleteTask = () =>{
    newli.remove();
    tasks = tasks.filter(t => t !== task)
    localStorage.setItem('task', JSON.stringify(tasks)); 
}
const AddTask = () => {
    const inputTaskValue = inputTask.value.trim();
    if(inputTaskValue !== ''){
        addTaskToList(inputTaskValue);  
        tasks.push(inputTaskValue);
        localStorage.setItem('task', JSON.stringify(tasks));
    }else{
        console.log('Вы не ввели');
    }
    inputTask.value = ''; 
};
function displayTaskUser() {
    if(tasks){
        tasks.forEach((task, index) => {
            addTaskToList(task, index);
        });
    } else{
        console.log('Не добавили задачи')
    }
}

displayTaskUser()     */