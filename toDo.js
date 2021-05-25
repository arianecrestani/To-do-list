const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask");
const deleteBtn = document.getElementById("deleteBtn");
const itemList = document.getElementById("itemList");
const sortBtn = document.getElementById("sortListBtn");
const hiddenDiv = document.getElementById("hiddenBtn");


hiddenDiv.style.visibility = "hidden";

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
  sortBtn.style.visibility = "hidden";
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
  sortDivList.forEach((element) => {
    itemList.appendChild(element);
  });
};

taskButton.addEventListener("click", taskButtonEventHandler);
inputTask.addEventListener("blur", removeSpaces);
inputTask.addEventListener("keypress", enterPress);
deleteBtn.addEventListener("click", deleteBtnEventHandler);
sortBtn.addEventListener("click", sortList);


//eventList para quando fechar a pagina salvar os itens no storage
window.onbeforeunload = () => {
  const divList = Array.prototype.slice.call(itemList.children);
  //para cada elemento do div list sera mapeado o valor do innerHtml
  const todos = divList.map((element) => element.innerHTML); // pegando só o innerHtml

  window.localStorage.setItem("todos",  JSON.stringify(todos));
};

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


const todos =  JSON.parse(window.localStorage.getItem("todos"));
if (Array.isArray(todos)) {
  todos.forEach((element) => {
    showList(element);
  });
}