function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Napisz skrypt do tworzenia i czyszczenia kolekcji elementów z następującą funkcjonalnością.
// Istnieje input, do którego użytkownik wprowadza żądaną liczbę elementów. Po naciśnięciu przycisku Create powinna być renderowana (dodawana do DOM) kolekcja z odpowiednią liczbą elementów i czyścić się wartość w inpucie. Po ponownym naciśnięciu przycisku Create powinna być renderowana nowa kolekcja powyżej starej. Po naciśnięciu przycisku Destroy kolekcja elementów powinna być wyczyszczona.
// 1 selectory / 2 tworzenie kolekcji (petla) / test inputu + czyszczenie i alert / destroy
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

// tworz div
function createCollection (amount) {
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        elements.push(div);
        size += 10;
    }

    boxContainer.append(...elements);
}

// sprawdź i wyczyść input
function handleCreate() {
    const amount = Number(input.value);

        if(amount >= 1 && amount <= 100) {
            createCollection(amount);
            input.value = "";
        } else {
            alert("Please enter a number between 1 and 100");
            input.value = "";
        }
    }

// usuń div
function handleDestroy() {
    boxes.innerHTML = "";
 }

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);
