// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element

const button = document.getElementById('add');
const verwijderKnop = document.getElementById('remove');
const input = document.getElementById('input');
const li = document.getElementById('list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    const verwijderKnop = document.createElement('button');
    verwijderKnop.textContent = 'Verwijderen';

    verwijderKnop.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(verwijderKnop);
    document.getElementById('list').appendChild(li);
});

