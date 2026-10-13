const origineel = document.getElementById('origineel');
const kopie = document.getElementById('kopie');



const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];



const origineleLijst = people.map(({ name, city }) => `<p>${name} - ${city}</p>`).join('');
origineel.innerHTML += origineleLijst;

const nieuweLijst = people.map(person => ({ ...person, city: 'Den Haag' }));

const kopieLijst = nieuweLijst.map(({ name, city }) => `<p>${name} - ${city}</p>`).join('');
kopie.innerHTML += kopieLijst;