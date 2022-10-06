"use strict"

const startButton = document.querySelector("[data-start]");
const endButton = document.querySelector("[data-stop]");

startButton.addEventListener("click", changeBodyColor);
endButton.addEventListener("click", stopChangeBodyColor);
endButton.disabled = true;

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
