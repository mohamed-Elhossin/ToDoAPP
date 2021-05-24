let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let show = document.getElementById('show');
let closee = document.getElementById('close');

let showMoel = () => {
 model.classList.toggle('display')  ;
}
show.addEventListener('click' , showMoel);
closee.addEventListener('click', showMoel)

let showNoTasks = () => {
    if (tasks.childElementCount == 0) {
        notask.classList.remove('none');
    }
}
let addTask = () => {
    let task = input.value;
    if (task.trim() == 0 || task.length < 2 || task.length > 20) {
        alert("you Must enter Valid Data")
    } else {
        notask.classList.add('none');
        tasks.innerHTML += `<div class='task alert alert-info'> ${task}
        <button  class='delete float-right btn btn-danger'> Delete </button>
        </div>`;
        showMoel();
    }
    tasks.addEventListener('click', function (ts) {
        if (ts.target.classList.contains('task')) {
            ts.target.classList.toggle('checked');
        }
    })
    input.value = "";
}
addbtn.addEventListener('click', addTask);

let deleteTask = (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }
}

document.addEventListener('click', deleteTask)