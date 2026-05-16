const $form = document.getElementById('taskForm')
const $input = document.getElementById('taskInput')
const $list = document.getElementById('taskList') // nodos

let tasks = JSON.parse(localStorage.getItem('task') || '[]')
// mostrar las tareas
for(i of tasks) crearTareaHtml(i)

// evento para crearlas
$form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let texto = $input.value
    let task = {id: Date.now(), texto: texto, hecho: false}
    tasks.push(task)
    saveTask()
    crearTareaHtml(task)
    $input.value = ''

})

function crearTareaHtml(task){


    const li = document.createElement('li')
    li.innerHTML = `
    <label style=" display:flex; align-items_center">
        <input type="checkbox" class="toggle" ${task.hecho ? 'checked' : ''}>
        <span> ${task.texto} </span>
    </label>
    <button class="delete">X</button>
    `;
    $list.appendChild(li)

    
    let checkbox = li.querySelector('.toggle')
    let btn = li.querySelector('.delete')


    li.style.background = task.hecho ? 'green' : 'none'

    checkbox.addEventListener('change',()=>{
        task.hecho = checkbox.checked; // true
        console.log(tasks)
        li.style.background = task.hecho ? 'green' : 'none'
        saveTask();
    })

    btn.addEventListener('click', ()=>{
        $list.removeChild(li)
        tasks = tasks.filter((t)=> t.id !== task.id)
        saveTask();

    })



}


function saveTask(){
    localStorage.setItem('task', JSON.stringify(tasks))
}
