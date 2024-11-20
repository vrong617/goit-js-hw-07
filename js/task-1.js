// Z wykorzystaniem właściwości i metod elementów DOM napisz skrypt, który:

// 1 Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.
// 2 Dla każdego elementu li.item na liście ul#categories znajdzie i wypisze w konsoli tekst nagłówka elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkich <li>, które są w nim zagnieżdżone).

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
    // h2
    const categoriesName = item.querySelector("h2").textContent; 
    // zlicz
    const liCount = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoriesName}`);
    console.log(`Elements: ${liCount}`);
  });

