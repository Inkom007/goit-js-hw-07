const btn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btn.addEventListener("click", handleClick);
spanEl.addEventListener("click", handleClick);

function handleClick() {
  btn.style.backgroundColor = getRandomHexColor();
  spanEl.style.backgroundColor = getRandomHexColor();
}






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

