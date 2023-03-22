
// const todoList = document.querySelector('#todo-list');
// const addTodoForm = document.querySelector('#add-todo-form');
// const newTodoInput = document.querySelector('#new-todo-input');

// let todos = [];

// function renderTodos() {
//     todoList.innerHTML = '';
//     todos.forEach((todo, index) => {
//         const todoItem = document.createElement('li');
//         todoItem.className = 'todo-item';
//         const todoLabel = document.createElement('label');
//         todoLabel.innerText = todo.text;
//         const todoEditInput = document.createElement('input');
//         todoEditInput.type = 'text';
//         todoEditInput.value = todo.text;
//         todoEditInput.style.display = 'none';
//         const deleteButton = document.createElement('button');
//         deleteButton.className = 'btn-delete';
//         deleteButton.innerText = 'Delete';
//         deleteButton.addEventListener('click', () => {
//             todos.splice(index, 1);
//             renderTodos();
//         });
//         const doneButton = document.createElement('button');
//         doneButton.className = 'btn-done';
//         doneButton.innerText = 'Done';
//         doneButton.addEventListener('click', () => {
//             todo.done = !todo.done;
//             renderTodos();
//         });
//         if (todo.done) {
//             todoItem.classList.add('done');
//         }
//         todoItem.appendChild(todoLabel);
//         todoItem.appendChild(todoEditInput);
//         todoItem.appendChild(deleteButton);
//         todoItem.appendChild(doneButton);
//         todoList.appendChild(todoItem);
//     });
// }

// addTodoForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const todoText = newTodoInput.value.trim();
//     if (todoText) {
//         todos.push({ text: todoText, done: false });
//         newTodoInput.value = '';
//         renderTodos();
//     }
// });

// renderTodos();

const todoList = document.querySelector('#todo-list');
const addTodoForm = document.querySelector('#add-todo-form');
const newTodoInput = document.querySelector('#new-todo-input');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        const todoLabel = document.createElement('label');
        todoLabel.innerText = todo.text;
        const todoEditInput = document.createElement('input');
        todoEditInput.type = 'text';
        todoEditInput.value = todo.text;
        todoEditInput.style.display = 'none';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn-delete';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });
        const editButton = document.createElement('button');
        editButton.className = 'btn-edit';
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => {
            todoLabel.style.display = 'none';
            todoEditInput.style.display = 'inline-block';
            editButton.style.display = 'none';
            doneButton.style.display = 'none';
        });
        const doneButton = document.createElement('button');
        doneButton.className = 'btn-done';
        doneButton.innerText = 'Done';
        doneButton.addEventListener('click', () => {
            todo.done = !todo.done;
            renderTodos();
        });
        if (todo.done) {
            todoItem.classList.add('done');
        }
        todoItem.appendChild(todoLabel);
        todoItem.appendChild(todoEditInput);
        todoItem.appendChild(deleteButton);
        todoItem.appendChild(editButton);
        todoItem.appendChild(doneButton);
        todoList.appendChild(todoItem);

        todoEditInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                todo.text = todoEditInput.value;
                todoLabel.innerText = todo.text;
                todoLabel.style.display = 'inline-block';
                todoEditInput.style.display = 'none';
                editButton.style.display = 'inline-block';
                doneButton.style.display = 'inline-block';
            }
        });
    });
}

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = newTodoInput.value.trim();
    if (todoText) {
        todos.push({ text: todoText, done: false });
        newTodoInput.value = '';
        renderTodos();
    }
});

renderTodos();
