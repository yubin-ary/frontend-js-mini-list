const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const filterBar = document.querySelector("#filterBar");
let currentFilter = "all";

// add 버튼 동작
addButton.addEventListener("click", async () => {
  const inputContent = handleContent();
  if (inputContent) {
    await delay(500);
    const listItem = createListItem(inputContent);
    todoList.append(listItem);
    todoInput.value = "";
    filterTodos(currentFilter);
  }
});
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// 투두 리스트 생성
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
  listItem.classList.add("listItem");
  return listItem;
};

// 투두 내용 검증
const handleContent = () => {
  const trimmed = todoInput.value.trim();
  if (!trimmed) return null;
  return trimmed;
};

// 삭제, 완료 체크 버튼 동작
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteButton")) {
    deleteTodo(e.target.closest("li"));
  }

  if (e.target.classList.contains("checkBox")) {
    isDone(e.target);
    filterTodos(currentFilter);
    return;
  }
});
const deleteTodo = (target) => {
  const listItem = target;
  listItem.remove();
  filterTodos(currentFilter);
  return;
};

// 완료시 버튼에 체크표시
const isDone = (target) => {
  target.classList.toggle("done");
  target.closest("li").classList.toggle("completed");
  const text = target.closest("li").querySelector(".todo-text");
  text.classList.toggle("cancelLine");

  if (target.classList.contains("done")) {
    target.textContent = "✓";
  } else {
    target.textContent = "";
  }
};

// 필터 버튼
filterBar.addEventListener("click", (e) => {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  if (e.target.id === "allTodos") {
    currentFilter = "all";
  } else if (e.target.id === "completedTodos") {
    currentFilter = "completed";
  } else if (e.target.id === "incompleteTodos") {
    currentFilter = "incomplete";
  } else return;
  filterTodos(currentFilter);
});

const filterTodos = (currentFilter) => {
  const listItems = Array.from(document.querySelectorAll(".listItem"));
  listItems.forEach((v) => {
    v.classList.add("hidden");
  });
  let filteredListItems = [];
  if (currentFilter === "all") {
    filteredListItems = listItems.filter((v) => true);
  } else if (currentFilter === "completed") {
    filteredListItems = listItems.filter((v) =>
      v.classList.contains("completed")
    );
  } else if (currentFilter === "incomplete") {
    filteredListItems = listItems.filter(
      (v) => !v.classList.contains("completed")
    );
  }
  filteredListItems.forEach((v) => v.classList.remove("hidden"));
};
