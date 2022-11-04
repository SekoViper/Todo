const todoContent = document.getElementById('label-container');

// get todo from localStorage
const getTodo = () => {
  const todoCollections = JSON.parse(localStorage.getItem('Todo')) || [];
  return todoCollections;
};

// Delete a task
const removeTodo = () => {
  const deleteIcons = document.querySelectorAll('.delete');
  const menuIcons = document.querySelectorAll('.menu');
  menuIcons.forEach((menuicon, index) => {
    menuicon.addEventListener('click', () => {
      menuicon.classList.add('hide');
      deleteIcons[index].classList.remove('hide');
    });
    deleteIcons[index].addEventListener('click', (event) => {
      const taskId = event.target.parentNode.parentNode.id;
      let todos = getTodo();
      todos = todos.filter((todo) => todo.id.toString() !== taskId);
      todos.forEach((todo, indx) => {
        todo.id = indx + 1;
      });
      localStorage.setItem('Todo', JSON.stringify(todos));
      // eslint-disable-next-line no-use-before-define
      displayTodo();
    });
  });
};

// Modify or edit a task
const updateTodo = () => {
  const taskEditinput = document.querySelectorAll('.desc');
  taskEditinput.forEach((text, index) => {
    text.addEventListener('change', (event) => {
      const todos = getTodo();
      todos[index].description = event.target.value;
      localStorage.setItem('Todo', JSON.stringify(todos));
      // eslint-disable-next-line no-use-before-define
      displayTodo();
    });
  });
};

// create and render tasks to the DOM
const displayTodo = () => {
  todoContent.innerHTML = '';
  const todos = getTodo();
  todos.forEach((todo) => {
    const content = `
    <div id="${todo.id}" class="label-container">
    <label class="container">
      <form class="task-edit">
        <input class="checkbox" type="checkbox">
        <input class="desc" value="${todo.description}" type="text">
      </form>
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
  removeTodo();
  updateTodo();
};

// Add a task
const addTodo = () => {
  const form = document.getElementById('task-form');
  const addInput = document.getElementById('todoTextField');
  addInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && addInput.value !== '') {
      const todoList = {
        id: getTodo().length + 1,
        description: addInput.value,
        completed: false,
      };
      const getToDos = getTodo();
      getToDos.push(todoList);
      localStorage.setItem('Todo', JSON.stringify(getToDos));
      displayTodo();
      form.reset();
    }
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};

// Export functions
export {
  addTodo, getTodo, displayTodo, removeTodo, updateTodo,
};
