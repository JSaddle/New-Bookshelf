function Bookshelf(books = []) {
  this.books = books;
  this.visibleBooks = books;

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.removeBook = function (book) {
    // Find a book with the same title
    const idx = this.books.map((b) => b.title).indexOf(book.title);
    // Use indexOf to check if the book with the given title is in the array.
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
