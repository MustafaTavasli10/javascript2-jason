let out = '';
const filmsSection = document.getElementById("films");

fetch('./movies.json')
.then(Response => Response.json())
.then(movies => {
    for(movie of movies){
        out += `<div>
        <h2>${movie.title}</h2>
        <p>Regisseur: ${movie.director}</p>
        <p>Jaar: ${movie.year}</p>
        <p>Genre: ${movie.genre}</p>
        </div
        `;
    }
    filmsSection.innerHTML = out;
})
.catch(error => console.error('Fout:', error));