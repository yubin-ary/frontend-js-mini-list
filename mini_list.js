const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addBtn");
addButton.addEventListener("click", () => {
  const inputContent = handleContent();
  if (inputContent) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-";
    deleteButton.classList.add("deleteButton");
    listItem.textContent = `${todoInput.value}`;
    listItem.append(deleteButton);
    todoList.append(listItem);
  }
});

const handleContent = () => {
  const todoInput = document.querySelector("#todoInput");
  const trimmed = todoInput.value.trim();
  if (!trimmed) {
    return null;
  }
  return trimmed;
};
