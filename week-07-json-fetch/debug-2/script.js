// Fout gevonden: r was fout, Euro teken was ook fout en er was op het laatste stukje van json bestand een komma die hoort daar niet.
// Oplossing: r moest response, euro teken weggehaald en in products.json was er een komma bij het laatste stukje waardoor die niet werkte

fetch('./products.json')
  .then(Response => Response.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — ${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
