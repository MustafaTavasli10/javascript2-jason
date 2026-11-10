let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {

  const html = items.map((pokemon, i) => {
    const id = pokemon.url ? pokemon.url.split('/')[6] : i + 1;

    const isFavorite = favorites.includes(pokemon.name);

    const buttonText = isFavorite ? 'Al favoriet' : 'Toevoegen aan favorieten';
    const disableAtttr = isFavorite ? 'disabled' : '';


    return`
    <article>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <button class="favorite-btn" ${disableAtttr}>${buttonText}</button>
    </article>
    `;
  }).join('');



  document.querySelector('#results').innerHTML = html;

  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const name = items[i].name;

      if (!favorites.includes(name)) {
        favorites.push(name);
        saveFavorites();
        showItems(items);
      }
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results;

    showItems(allPokemon);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

  document.querySelector('#show-all').addEventListener('click', () => {
    showItems(allPokemon);
  })

  document.querySelector('#show-favorites').addEventListener('click', () => {
    const filteredFavorites = allPokemon.filter(pokemon => favorites.includes(pokemon.name));
    showItems(filteredFavorites);
  });

