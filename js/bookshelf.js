
function Bookshelf(books = []) {
  this.books = books;
  this.visibleBooks = books;

  this.addBook = function (book) {
    this.books.push(book);
  }
  // Use .push to add a book into our empty array of books, also known as our Bookshelf.


  this.removeBook = function (book) {
    // Find a book with the same title, subject, author, or language.
    const idx = this.books.map((b) => b.title || b.author || b.language || b.subject).indexOf(book.title || book.author || book.language || book.subject);
    // Use indexOf to check if the book with the given title, subject, author, or language is in the array.
    // Use map to create a new array which doesn't include the book we chose to remove.
    if (idx !== -1) {
      this.books.splice(idx, 1);
      return book;
    }
    // If the index does not equal -1, this means we have located our book within
    // the books array. Thus, we use splice to remove the book we have located.
    else {
      return null;
    }
    // If the index does equal -1, this means our book is not within our books array
    // and therefore we return nothing (since we cannot remove a book from an array 
    // that it is already in.)
  };

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = function () {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    // Create a new array that contains the elements within our books array.
    ul.replaceChildren(...books);
    return ul;
  };

  // This allows us to maintain the original list of books
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
  };

  this.sortVisibleBooks = function (sortFn) {
    this.visibleBooks.sort(sortFn);
  };



}


