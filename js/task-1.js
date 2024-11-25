// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

const categoryTitle = listItem.forEach((element) => {
    // Title text value
    console.log(`Category: ${element.children[0].textContent}`);

    // Number of li items inside ul
    console.log(`Elements: ${element.children[1].children.length}`);
});
