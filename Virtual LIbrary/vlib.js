// DOM Elements
const addBookForm = document.getElementById('add-book-form');
const bookList = document.getElementById('book-list');
const searchBar = document.getElementById('search-bar');

// Load books from LocalStorage
let library = JSON.parse(localStorage.getItem('library')) || [];

// Function to render books
function renderBooks(filter = '') {
  bookList.innerHTML = '';
  const filteredBooks = library.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredBooks.length === 0) {
    bookList.innerHTML = '<p>No books found.</p>';
    return;
  }

  filteredBooks.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>PDF Link:</strong> <a href="${book.link}" target="_blank">Read PDF</a></p>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookList.appendChild(bookCard);
  });
}

// Add book to library
addBookForm.addEventListener('submit', event => {
  event.preventDefault();

  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const link = document.getElementById('book-link').value;

  // Add new book to the library array
  library.push({ title, author, link });

  // Save updated library to LocalStorage
  localStorage.setItem('library', JSON.stringify(library));

  // Re-render the book list
  renderBooks();

  // Reset the form fields
  addBookForm.reset();
});

// Remove book from library
function removeBook(index) {
  // Remove the book at the specified index
  library.splice(index, 1);

  // Update LocalStorage
  localStorage.setItem('library', JSON.stringify(library));

  // Re-render the book list
  renderBooks();
}

// Search books
searchBar.addEventListener('input', event => {
  // Render books that match the search term
  renderBooks(event.target.value);
});

// Initial render
renderBooks();

