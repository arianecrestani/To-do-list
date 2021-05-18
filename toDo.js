const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask")

const taskButtonEventHandler = () => {
    showList(inputTask.value)
};

taskButton.addEventListener("click", taskButtonEventHandler);

const showList = (toDo) => {
  const container = document.getElementsByClassName("add-item")[0];
  container.appendChild(createItem(toDo));
  inputTask.value = "";
};

const createItem = (toDo) => {
  const item = document.createElement("div");
  item.id = "addToDo";
  item.className = 'item'
  item.innerHTML = toDo;
  item.addEventListener("click", deleteItem);
  return item
};

const deleteItem = (event) => {
  event.target.remove();
}
