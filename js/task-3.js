//Napisz skrypt, który podczas wprowadzania tekstu do inputu input#name-input (zdarzenie input) podstawia jego bieżącą wartość do span#name-output jako imię do powitania. Upewnij się, że wartość w inpucie jest oczyszczana z białych znaków na krańcach. Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie powinien pojawić się ciąg "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (textInput.value.trim() === "") {
        output.textContent = "Anonymous"
    }
    else {
  output.textContent = event.currentTarget.value.trim();
    }
});
