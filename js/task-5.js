function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//Napisz skrypt, który po kliknięciu na button.change-color zmienia kolor tła elementu <body>
// za pomocą stylu inline
// i przypisuje tę wartość koloru do span.color.

const changeButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function randomColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
};

changeButton.addEventListener("click", randomColor);