
const charactersContainer = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data);

    for (let character of data.results) {
      charactersContainer.innerHTML += `
      <article>
      <h2>${character.name}</h2>
      <img src= "${character.image}" alt="${character.name}">
      </article>`
    }
  })
  .catch(error => console.error('Fout:', error));
