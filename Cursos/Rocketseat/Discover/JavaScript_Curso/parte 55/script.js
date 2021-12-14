// função que adiciona tarefa
function addTask() {}

// titulo da tarefa
const addBtn = document.querySelector('#add-btn');

if (tasktitle) {
  // clona template

  const template = document.querySelector('.template');

  const newTask = template.cloneNode(true);

  // adiciona titulo
  newTask.querySelector('.task-title').textContent = tasktitle;

  // remover as classes desnecessárias
  newTask.classList.remove('template');
  newTask.classList.remove('hide');

  // adiciona tarefa na lista
  const list = document.querySelector('#task-list');

  list.appendChild(newTask);

  // adicionar o evento do remover
  const removeBtn = newTask.querySelector('.remove');

  // adicionar evento de completar tarefa
  const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
      completeTask(this);
  })

  // limpar texto
  document.querySelector('#task-title').value = '';
}

//função de remover tarefa
function removeTask(task) {
  task.parentNode.remove(true;)
}

// função de completar a tarefa
    function completeTask(task) {
        const taskComplete = task.parentNode;

        taskComplete.classList.toggle("done");
    }

// event de adicionar tarefa
const addBtn = document.querySelector('add-btn');

addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  addTask();
});
