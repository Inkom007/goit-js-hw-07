const btn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btn.addEventListener("click", handleClick);
spanEl.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  btn.style.backgroundColor = color;
  spanEl.style.backgroundColor = color;
}






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

