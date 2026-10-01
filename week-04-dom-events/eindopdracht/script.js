// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

let takenLijst = document.getElementById('counter');
let formulier = document.getElementById('task-form');
let input = document.getElementById('task-input');
let taken = document.getElementById('tasks');

function taakToevoegen() {
    let li = document.createElement('li');
    li.textContent = input.value;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
    li.classList.toggle('afgevinkt');
    });

    let verwijderKnop = document.createElement('button');
    verwijderKnop.textContent = 'Verwijderen';
    li.appendChild(verwijderKnop);
    verwijderKnop.addEventListener('click', () => {
    li.remove();
    toonTaken();
    });

    taken.appendChild(li);

    input.value = '';
}

function toonTaken() {
    let aantalTaken = taken.getElementsByTagName('li').length;
    takenLijst.textContent = aantalTaken;

}

toonTaken();

formulier.addEventListener('submit', (e) => {
    e.preventDefault();
    taakToevoegen();
    toonTaken();
});