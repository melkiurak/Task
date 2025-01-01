function addTask() {
    const inputValue = document.getElementById('taskInput');
    const listTask = document.getElementById('taskList');
    if(inputValue.value.trim() !== '') {
        const newLi = document.createElement('li');
        listTask.appendChild(newLi);
        newLi.innerHTML = inputValue.value;
        inputValue.value = '';
    } else{
        console.log('Вы ничего не ввели')
    }
}
