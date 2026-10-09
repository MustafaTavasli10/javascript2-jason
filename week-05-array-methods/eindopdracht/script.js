const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

let searchTerm = '';
let sorting = '';

const searchBar = document.querySelector('#search-bar');
const sortLowButton = document.querySelector('#sort-low');
const sortHighButton = document.querySelector('#sort-high');
const counter = document.querySelector('#counter');
const productsContainer = document.querySelector('#products');

const showProducts = (list) => {
  productsContainer.innerHTML = '';

  list.forEach((product) => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productsContainer.appendChild(article);
  });

  counter.textContent = list.length;
};

const filterProducts = () => {
  let filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  }); 

  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
};

searchBar.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  filterProducts();
});

sortLowButton.addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

sortHighButton.addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

filterProducts();