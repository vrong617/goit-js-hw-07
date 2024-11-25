// Напиши скрипт управління формою логіна.
// 1. відправлення форми form.login-form повинна відбуватися за подією submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися. = preventDefault()
// 3. Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// 5. При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// 1. Find required elements
const formEl = document.querySelector("form.login-form");

// 2. Send form by Submit, prevent from reload, collect data in array
const submitForm = formEl.addEventListener("submit", event => {
    event.preventDefault();
    var userData = {};
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if (email == '' || password == '') {
        alert('All form fields must be filled in');
    } else {
        userData.email = email.trim();
        userData.password = password.trim();
        console.log(userData)
        formEl.elements.email.value = "";
        formEl.elements.password.value = "";
    }
});

