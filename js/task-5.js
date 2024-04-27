
const spanEl = document.querySelector(".color");
const body = document.querySelector("body");




spanEl.addEventListener("click", handleClick);
body.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  spanEl.style.backgroundColor = color;
  body.style.backgroundColor = color;
  spanEl.textContent = `${color}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

