// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// ++ Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// ++ Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// ++ Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// ++ Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// ++ Розміри першого <div> елемента мають бути 30px на 30px.
// ++ Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// ++ Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// 1. Find buttons
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = createBtn.nextElementSibling;
const inputEl = createBtn.previousElementSibling;
const boxesGrid = document.querySelector("div#boxes");

// 2. Functions
function createBoxes(amount) {

  // Verify if amount fits 
  if (amount > 0 && amount <= 100) {
    let newArray = [];
    
    // Loop for adding new items N times
    for (let i = 0; i < amount; i++) {
      const newDivEl = document.createElement("div");
      newDivEl.style.width = `${30 + (10 * i)}px`;
      newDivEl.style.height = `${30 + (10 * i)}px`;
      newDivEl.style.backgroundColor = getRandomHexColor();
      newArray.push(newDivEl);
    }
    // Clean the array and input from previous result
    boxesGrid.innerHTML = "";
    inputEl.value = "";
    
    // Add newArray in div#boxes
    boxesGrid.append(...newArray)
  }
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 3. Set listeners
const onClickCreateBtn = createBtn.addEventListener("click", el => createBoxes(inputEl.value));

const onClickDestroyBtn = destroyBtn.addEventListener("click", el => {
  boxesGrid.innerHTML = "";
  inputEl.value = "";
 });