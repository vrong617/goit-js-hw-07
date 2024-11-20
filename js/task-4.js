// Przetwarzanie wysyłania formularza form.login-form powinno odbywać się poprzez zdarzenie submit.
// Podczas wysyłania formularza strona nie powinna być przeładowywana.
// Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetl alert z komunikatem 'All form fields must be filled in'. Nie dodawaj atrybutu required do inputów, walidacja powinna odbywać się za pomocą JS.
// Jeśli użytkownik wypełnił wszystkie pola i wysłał formularz, zbierz wartości pól do obiektu z dwoma właściwościami, gdzie kluczem jest nazwa inputów, a wartością są odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach. Do uzyskania dostępu do elementów formularza użyj właściwości elements.
// Przy submit formularza wypisz obiekt z wprowadzonymi danymi w konsoli i zresetuj wartości pól formularza za pomocą metody reset.


const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password){
        alert("All form fields must be filled in");
        return;
    }
        const newUser = {
            email,
            password,
        };

    console.log(newUser);
    form.reset();
}
