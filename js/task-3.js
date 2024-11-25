// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// 1. Find elements in DOM
const inputEl = document.querySelector("input#name-input");

const outputEl = document.querySelector("span#name-output");

// *See entered key in console
// console.dir(outputEl)

// 2. Track input event
const onKeyupInput = inputEl.addEventListener("keyup", item => {
    // console.log(item.key);
    console.dir(inputEl.value)

    if (inputEl.value == null || inputEl.value.trim() == "") {
    outputEl.innerHTML = "Anonymous";
    } else {
    outputEl.innerHTML = inputEl.value.trim();
    }
});