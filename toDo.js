const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask");
const deleteBtn = document.getElementById("deleteBtn");
const itemList = document.getElementById("itemList");
const sortBtn = document.getElementById("orderList");

//hidden deleteButton

deleteBtn.style.visibility = "hidden";
sortBtn.style.visibility = "hidden"

const taskButtonEventHandler = () => {
  if (inputTask.value.length > 0) {
    showList(inputTask.value);
  }
};
// remove space from imput
const removeSpaces = () => {
  inputTask.value = inputTask.value.trim(" ");
};

const enterPress = (e) => {
  if (e.key === "Enter") {
    taskButtonEventHandler();
  }
};

const deleteBtnEventHandler = () => {
  itemList.innerHTML = "";
  deleteBtn.style.visibility = "hidden";
};

const sortList = () => {
  //trasformando a lista do html em array 
  let sortDivList = Array.prototype.slice.call(itemList.children);

  // ordenanando o array 
  sortDivList.sort((a, b) => {
    return a.innerHTML < b.innerHTML ? -1 : 1;
  });

  //limpando a lista no html 
  itemList.innerHTML = "";

  // e então retorna a lista adicionando os itens em ordem 
  sortDivList.forEach(element => {
    itemList.appendChild(element);
  });
};

taskButton.addEventListener("click", taskButtonEventHandler);
inputTask.addEventListener("blur", removeSpaces);
inputTask.addEventListener("keypress", enterPress);
deleteBtn.addEventListener("click", deleteBtnEventHandler);
sortBtn.addEventListener("click", sortList);

const showList = (toDo) => {
  itemList.appendChild(createItem(toDo));
  inputTask.value = "";
  deleteBtn.style.visibility = "visible";
  sortBtn.style.visibility = "visible";
};

const createItem = (toDo) => {
  const item = document.createElement("div");
  item.id = "addToDo";
  item.className = "item";
  item.innerHTML = toDo;
  item.addEventListener("click", deleteItem);
  return item;
};
//remove item when is clicked
const deleteItem = (event) => {
  event.target.remove();
};
