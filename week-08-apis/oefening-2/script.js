let allPokemon = [];

const pokemonList = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));
    
    showPokemon(allPokemon);
  })
  .catch(error => console.error('Fout:', error)); 


function showPokemon(pokemonArray) {
    pokemonList.innerHTML = '';
    
    counter.textContent = pokemonArray.length;

    for (let pokemon of pokemonArray) {
      pokemonList.innerHTML += `
        <article>
          <h3>${pokemon.name}</h3>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        </article>
      `;
    }
}

searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase();
  
  const filteredPokemon = allPokemon.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  showPokemon(filteredPokemon);
});