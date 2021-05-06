const taskButton = document.getElementById("click");
const inputTask = document.getElementById("inputTask")

const generateButtonToDo = () => {
    inputTask.value

};
taskButton.addEventListener("click", generateButtonToDo);

const showList = (toDo) => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  container.appendChild(addToDo(toDo));
};

const addToDo = (toDo) => {
  const section = createDivSection();

  const itemList = document.createElement("p");
  itemList.id ="list";
  itemList.innerHTML = toDo.value;
  section.appendChild(itemList);

  const removeDiv = document.createElement('div');
  removeDiv.className = 'removeDivSection';
  section.appendChild(removeDiv);

  return section;
};

function createDivSection() {
  const section = document.createElement("div");
  section.className = "divSection";
  return section;
}