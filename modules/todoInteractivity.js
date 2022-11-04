const checker = () => {
  const todoCollections = JSON.parse(localStorage.getItem('Todo')) || [];
  todoCollections.forEach((task) => {
    if (task.completed === true) {
      const element = document.getElementById(`${task.id}`);
      element.children[0].children[0].children[0].checked = task.completed;
    }
  });
};

const interactivity = () => {
  const description = document.querySelectorAll('.desc');
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const todoCollections = JSON.parse(localStorage.getItem('Todo')) || [];
      todoCollections.forEach((task) => {
        if (event.target.parentNode.parentNode.parentNode.id === task.id.toString()) {
          task.completed = event.target.checked;
        }
      });
      localStorage.setItem('Todo', JSON.stringify(todoCollections));
    });
  });
  checker();
};

export default interactivity;