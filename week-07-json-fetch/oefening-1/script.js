
let out = '';
const bookList = document.getElementById("books-list");


fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    for(let book of books) {
      out += `<li>
      <strong>${book.title}</strong> - ${book.author} (${book.year})</li>`;
    }

    bookList.innerHTML = out;
  })
  .catch(error => console.error('Fout:', error));
