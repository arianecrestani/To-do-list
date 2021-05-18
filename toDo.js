const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask");

const taskButtonEventHandler = () => {
  if (inputTask.value.length > 0) {
    showList(inputTask.value);
  }
};
const removeSpaces = () => {
  inputTask.value = inputTask.value.trim(" ");
};

taskButton.addEventListener("click", taskButtonEventHandler);
inputTask.addEventListener("blur", removeSpaces);

const showList = (toDo) => {
  const container = document.getElementsByClassName("add-item")[0];
  container.appendChild(createItem(toDo));
  inputTask.value = "";
};

const createItem = (toDo) => {
  const item = document.createElement("div");
  item.id = "addToDo";
  item.className = "item";
  item.innerHTML = toDo;
  item.addEventListener("click", deleteItem);
  return item;
};

const deleteItem = (event) => {
  event.target.remove();
};
