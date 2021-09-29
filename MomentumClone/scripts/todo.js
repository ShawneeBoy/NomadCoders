const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos"

let todos = [];

function saveTodos(){
  let todoString = JSON.stringify(todos);
  localStorage.setItem(TODOS_KEY, todoString);
  
}

function deleteTodo(e){
  const li = e.target.parentElement;
  todos = todos.filter((t) => t.id !== parseInt(li.id));
  li.remove();
  saveTodos();
}

function paintTodo(newTodoObj){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerHTML = "✓";
  button.classList.add("deleteButton");
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.appendChild(span);
  span.innerHTML = newTodoObj.text;
  li.id = newTodoObj.id;
  todoList.appendChild(li);
}

function handleTodoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todoInput.value = "";
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
} else {
  
}
