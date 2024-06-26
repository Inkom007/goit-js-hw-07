const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";
  const array = [];
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
    
  }
     boxes.append(...array);
};

btnCreate.addEventListener("click", handleClick);

function handleClick() {
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  }
  }

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

