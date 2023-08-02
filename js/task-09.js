function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');


btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  let randomColor = getRandomHexColor();
  span.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}