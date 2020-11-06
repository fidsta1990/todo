// SELECTORS=======================
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".list");
const clearList = document.querySelector(".clear-btn");
const filter = document.querySelector(".filter-option");

// FUNCTIONS========================
const addTodo = (event) => {
  event.preventDefault();
  // create Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   create Li
  const newList = document.createElement("li");
  newList.classList.add("todo-item");
  newList.innerHTML = todoInput.value;
  todoDiv.appendChild(newList);
  //   item complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("done");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeBtn);
  //   item delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("trash");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(deleteBtn);
  //   append item to div and container
  todoList.appendChild(todoDiv);
  todoInput.value = "";
};

// Delete Todo Item or Mark as COmplete===========
const deleteCheck = (e) => {
  const item = e.target;
  if (item.classList[0] === "trash") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "done") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

// FIlter through All, Complete/ Incomplete tasks==============
const filterOptions = (e) => {
  let todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = `flex`;
        break;
      case "complete":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

// Clear entire list================
const clearAll = () => {
  todoList.innerHTML = "";
};
// EVENT LISTENERS=====================
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filter.addEventListener("click", filterOptions);
clearList.addEventListener("click", clearAll);
