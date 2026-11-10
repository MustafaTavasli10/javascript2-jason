const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

localStorage.setItem('userZonderJSON', user);

let resultaat = localStorage.getItem('userZonderJSON');

let sectieZonderJson = document.getElementById('zonder-json');
sectieZonderJson.innerHTML += `<p>Resultaat: ${resultaat}</p>;`


let stringifiedUser = JSON.stringify(user);
localStorage.setItem('userMetJSON', stringifiedUser);

let opgehaaldeTekst = localStorage.getItem('userMetJSON');
let echtObject = JSON.parse(opgehaaldeTekst);

let sectieMetJson = document.getElementById('met-json');
sectieMetJson.innerHTML += `<p>Naam: ${echtObject.name} Leeftijd: ${echtObject.age} Stad: ${echtObject.city}</p>`;
