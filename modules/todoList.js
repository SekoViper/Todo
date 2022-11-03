const todoContent = document.getElementById('label-container');

const getTodo = () => {
  const todoCollections = JSON.parse(localStorage.getItem('Todo')) || [];
  return todoCollections;
};

const displayTodo = () => {
  todoContent.innerHTML = '';
  const todos = getTodo();
  todos.forEach((todo) => {
    const content = `
    <div id="${todo.id}" class="label-container">
    <label class="container">
      <div>
        <input type="checkbox">
        <span>${todo.description}</span>
      </div>
    </label>
    <div class="edit">
    <i id='menu' class="menu fa-solid fa-ellipsis-vertical pointer"></i>
    <i id='del' class="delete fa-regular fa-trash-can pointer hide"></i>
    </div>
  </div>
    <hr>
    `;
    todoContent.innerHTML += content;
  });
};

const addTodo = () => {
  const addInput = document.getElementById('todoTextField');
  // const form = document.querySelector('form');
  addInput.addEventListener('keypress', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      const todoList = {
        id: getTodo().length + 1,
        description: addInput.value,
        completed: false,
      };
      const getToDos = getTodo();
      getToDos.push(todoList);
      localStorage.setItem('Todo', JSON.stringify(getToDos));
      displayTodo();
    }
  });
};

const removeTodo = () => {
  const deleteIcons = document.querySelectorAll('.delete');
  const menuIcons = document.querySelectorAll('.menu');
  menuIcons.forEach((menuicon, index) => {
    menuicon.addEventListener('click', () => {
      menuicon.classList.add('hide');
      deleteIcons[index].classList.remove('hide');
      deleteIcons[index].addEventListener('click', (event) => {
        const taskId = event.target.parentNode.parentNode.id;
        let todos = getTodo();
        todos = todos.filter((todo) => todo.id.toString() !== taskId);
        todos.forEach((todo, indx) => {
          todo.id = indx + 1;
        });
        localStorage.setItem('Todo', JSON.stringify(todos));
        displayTodo();
      });
    });
  });
};

export {
  addTodo, getTodo, displayTodo, removeTodo,
};
