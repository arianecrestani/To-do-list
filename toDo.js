const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask")
const addToDo = document.getElementById ("addToDo")

const generateButtonToDo = () => {

    showList(inputTask.value)
   
};
taskButton.addEventListener("click", generateButtonToDo);
addToDo.addEventListener('click', deleteTask);



const showList = (toDo) => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  container.appendChild(addToDo(toDo));
};

const deleteTask = () => {
 let taks = []

};

const addToDo = (toDo) => {
  const addItem = document.createElement("div");
  addItem.id ="addToDo";
  addItem.innerHTML = toDo;
  return addItem

};

const toDoList = (list) => {

  const listDiv = document.createElement("div");
  listDiv .id ="listDiv";
  listDiv .innerHTML = list;
  listDiv.appendChild(addItem)
  return listDiv


}
// function createDivSection() {
//   const section = document.createElement("div");
//   section.className = "divSection";
//   return section;
// }






