const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask")

const generateButtonToDo = () => {
    showList(inputTask.value)

};
taskButton.addEventListener("click", generateButtonToDo);

const removeToDo =(toDo)=> {
  const removeDiv = document.createElement('div');
  removeDiv.className = 'removeDivSection';
  section.appendChild(removeDiv);
};

const showList = (toDo) => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  container.appendChild(addToDo(toDo));
};

const addToDo = (toDo) => {

  const addItem = document.createElement("div");
  addItem.id ="addToDo";
  addItem.innerHTML = toDo;
  return addItem

};
const listTodo = (toDo) =>{


}






