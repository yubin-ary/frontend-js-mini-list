const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const deleteButton = document.querySelector(".deleteButton");
const checkBox = document.querySelector(".checkBox");

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
  const deleteButton = document.createElement("button");
  const checkBox = document.createElement("button");

  listItem.textContent = `${inputContent}`;

  deleteButton.textContent = "-";
  deleteButton.classList.add("deleteButton");
  checkBox.classList.add("checkBox");
  listItem.append(deleteButton);
  listItem.append(checkBox);
  return listItem;
};

const handleContent = () => {
  const trimmed = todoInput.value.trim();
  if (!trimmed) {
    return null;
  }
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
  if (target.classList.contains("done")) {
    target.textContent = "✓";
  } else {
    target.textContent = "";
  }
};
