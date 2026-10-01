// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

let takenLijst = document.getElementById('counter');
let formulier = document.getElementById('task-form');
let input = document.getElementById('task-input');
let taken = document.getElementById('tasks');

input.addEventListener('click', () => {
    formulier.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});
