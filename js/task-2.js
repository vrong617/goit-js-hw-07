const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// Napisz skrypt tworzący galerię obrazów na podstawie tablicy danych. HTML zawiera listę ul.gallery.

// Wykorzystaj tablicę obiektów images do utworzenia elementów <img>, umieszczonych wewnątrz <li>.

// Możesz utworzyć i dodać elementy HTML za pomocą document.createElement() i elem.append(), lub szablonów ciągów i elem.insertAdjacentHTML().

// Wszystkie elementy galerii powinny być dodawane do DOM w jednej operacji dodawania.
// Dodaj minimalne stylizowanie galerii za pomocą flexboxów za pomocą klas CSS.

const gallery = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    ({url, alt}) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

