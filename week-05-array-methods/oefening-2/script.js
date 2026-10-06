const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 

const input = document.querySelector('#search-find');
const output = document.querySelector('#output-find');

const ingevoerdeLetter = "a";

const gevonden = names.find(name => name.toLowerCase().startsWith(ingevoerdeLetter.toLowerCase()));
console.log(gevonden); 
output.textContent = gevonden ? gevonden : 'Geen naam gevonden';
input.value = ''; 

const inputIncludes = document.querySelector('#search-includes');
const outputIncludes = document.querySelector('#output-includes');

const ingevoerdeNaam = "bob";

const kleineNamen = names.map(name => name.toLowerCase());
const staatInLijst = kleineNamen.includes(ingevoerdeNaam.toLowerCase());
console.log(staatInLijst);
outputIncludes.textContent = staatInLijst;
inputIncludes.value = '';