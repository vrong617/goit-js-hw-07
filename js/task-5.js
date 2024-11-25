// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

// Click button:
// change bg color to newColor
// set newColor to span

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Find element
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

// 2. Set listener
buttonEl.addEventListener("click", event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  buttonEl.previousElementSibling.children[0].textContent = getRandomHexColor();
});
