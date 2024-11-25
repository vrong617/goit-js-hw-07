const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


// 01. create image card function
const createGalleryCard = (item) => {

  // 1.1 create li
  const galleryLiEl = document.createElement("li");
  galleryLiEl.classList.add("gallery-item")

  // 1.2 create image
  const galleryImgEl = document.createElement("img");
  galleryImgEl.classList.add("gallery-image")

  galleryImgEl.src = item.url;
  galleryImgEl.alt = item.alt;
  galleryImgEl.width = 360;

  // 1.3 place image inside li
  galleryLiEl.append(galleryImgEl);

  // 1.4 return final structure
  return galleryLiEl
}

// 2. Create new array based on images using function 01
const galleryArray = images
  .slice(0,3)
  .map(el => createGalleryCard(el));
// console.log(galleryArray)

// 3. find Gallery
const galleryUlEl = document.querySelector("ul.gallery");

// 4. Insert in HTML
galleryUlEl.append(...galleryArray);
// console.log(galleryUlEl);
