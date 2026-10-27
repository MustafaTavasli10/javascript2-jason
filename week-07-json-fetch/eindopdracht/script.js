let allArticles = [];

const showArticles = (articles) => {
  const articlesContainer = document.getElementById('articles');
  articlesContainer.innerHTML = articles.map(article => `
    <article>
    <h2>${article.title}</h2>
    <p><strong>Categorie:</strong>${article.category}</p>
    <p>${article.summary}</p>
    </article>
    `).join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.getElementById('filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.getElementById('filter-stad').addEventListener('click', () => {
  const filtered = allArticles.filter(article => article.category === 'stad');
  showArticles(filtered);
});

document.getElementById('filter-technologie').addEventListener('click', () => {
  const filtered = allArticles.filter(article => article.category === 'Technologie');
  showArticles(filtered);
});

document.getElementById('filter-media').addEventListener('click', () => {
  const filtered = allArticles.filter(article => article.category === 'Media');
  showArticles(filtered);
});