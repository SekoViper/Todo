const todoContent = document.getElementById('label-container');

const todos = [
  {
    id: 0,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi iste ipsum dolore! Explicabo modi labore maxime a nisi!',
    completed: true,
  },
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi iste ipsum dolore! Explicabo modi labore maxime a nisi!',
    completed: false,
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi iste ipsum dolore! Explicabo modi labore maxime a nisi!',
    completed: true,
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione modi iste ipsum dolore! Explicabo modi labore maxime a nisi!',
    completed: false,
  },
];

const displayBooks = () => {
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
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
    <hr>
    `;
    todoContent.innerHTML += content;
  });
};
export default displayBooks;
