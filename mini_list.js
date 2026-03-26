const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");

addButton.addEventListener("click", () => {
  const inputContent = handleContent();
  if (inputContent) {
    const listItem = createListItem(inputContent);
    todoList.append(listItem);
    todoInput.value = "";
  }
});

const createListItem = (inputContent) => {
  const listItem = document.createElement("li");

  const text = document.createElement("span");
  text.classList.add("todo-text");
  text.textContent = inputContent;

  const deleteButton = document.createElement("button");
  const checkBox = document.createElement("button");

  deleteButton.classList.add("btn", "delete-btn", "deleteButton");
  checkBox.classList.add("btn", "check-btn", "checkBox");

  deleteButton.textContent = "✖";
  checkBox.textContent = "";

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");

  btnGroup.append(checkBox, deleteButton);
  listItem.append(text, btnGroup);

  return listItem;
};

const handleContent = () => {
  const trimmed = todoInput.value.trim();
  if (!trimmed) return null;
  return trimmed;
};

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteButton")) {
    const listItem = e.target.closest("li");
    listItem.remove();
    return;
  }

  if (e.target.classList.contains("checkBox")) {
    isDone(e.target);
    return;
  }
});

const isDone = (target) => {
  target.classList.toggle("done");

  const text = target.closest("li").querySelector(".todo-text");
  text.classList.toggle("completed");

  if (target.classList.contains("done")) {
    target.textContent = "✓";
  } else {
    target.textContent = "";
  }
};
