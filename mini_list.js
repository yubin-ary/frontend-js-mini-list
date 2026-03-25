const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const deleteButton = document.querySelector("#deleteButton");

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
  listItem.textContent = `${inputContent}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "-";
  deleteButton.classList.add("deleteButton");
  listItem.append(deleteButton);
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
  }
});
