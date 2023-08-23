function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("[type = 'number']");

let quantity = 0;

function onChange(event) {
  quantity = Number(event.currentTarget.value);
  console.log(quantity);
}

inputEl.addEventListener("change", onChange);

const boxContainer = document.querySelector("#boxes");
const boxCreate = document.querySelector("[data-create]");
const boxDestroy = document.querySelector("[data-destroy]");

function createBoxes() {
  const boxesArr = [];
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < quantity; i++) {
    const newBox = `<div style="background-color:${getRandomHexColor()}; width:${boxWidth}px; height:${boxHeight}px"></div>`;
    boxesArr.push(newBox);
    boxWidth += 10;
    boxHeight += 10;
  }

  const boxes = boxesArr.join("");

  boxContainer.insertAdjacentHTML("afterbegin", boxes);
  return;
}

function clearBoxes() {
  boxContainer.innerHTML = "";
}

boxCreate.addEventListener("click", createBoxes);
boxDestroy.addEventListener("click", clearBoxes);
