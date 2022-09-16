// --------------------------
//#region Initialization
// --------------------------
const bookList = document.querySelector(".books");
const bookshelf = new Bookshelf();


for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}
// Load in book data


const render = () => {
  bookList.replaceChildren(bookshelf.render());
};

// Render the first time the page loads
bookshelf.filterVisibleBooks(() => true);
bookshelf.sortVisibleBooks((a, b) => (a.title.localeCompare(b.title)));
render();
// Render the first time the page loads

//#endregion Initialization

// --------------------------
//#region Searching
// --------------------------

const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");
// Declare search button and search input.


searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => (b.title.toLowerCase().includes(query)
    || b.author.toString().toLowerCase().includes(query)
    || b.subject.toString().toLowerCase().includes(query)
    || b.language.toString().toLowerCase().includes(query));
  bookshelf.filterVisibleBooks(searchFn);
  render();
});
// Create EventListener so that when the Search Button is clicked,
// we are able to compare our search input to any title, subject,
// language, or author to any/all books in our array.

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------

const sortBy = document.querySelector(".sortBy");


sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, b) => a.title.localeCompare(b.title);
  }
  if (query === "titleza") {
    sortFn = (a, b) => b.title.localeCompare(a.title);
  }
  if (query === "authoraz") {
    sortFn = (a, b) => a.author.toString().localeCompare(b.author);
  }
  if (query === "authorza") {
    sortFn = (a, b) => b.author.toString().localeCompare(a.author);
  }
  if (query === "subjectaz") {
    sortFn = (a, b) => a.subject.toString().localeCompare(b.subject);
  }
  if (query === "subjectza") {
    sortFn = (a, b) => b.subject.toString().localeCompare(a.subject);
  }
  if (query === "langaz") {
    sortFn = (a, b) => a.language.toString().localeCompare(b.language);
  }
  if (query === "langza") {
    sortFn = (a, b) => b.language.toString().localeCompare(a.language);
  }

  bookshelf.sortVisibleBooks(sortFn);
  render();
});
// Create an Event Listener that sorts the array based upon the given criteria.
// For example, if we click "Subject Z-A", the array will be sorted from Z to A
// based upon the first letter of the subjects in each given book.






//#endregion Sorting


////////IMPORTANT NOTE//////////////////////////////////////////////////

// I realize that the functionality of Add A Book! below does not properly add the book to our books Array.
// I had trouble figuring out how to refer to our original books array, and thus, settled with what I
// created below. I look forward to getting a better understanding of how to approach this issue in the future.

////////IMPORTANT NOTE//////////////////////////////////////////////////


const inpTitle = document.querySelector("#addTitle");
const inpAuthor = document.querySelector("#addAuthor");
const inpLanguage = document.querySelector("#addLanguage");
const inpSubject = document.querySelector("#addSubject");
const addBtn = document.querySelector("#add-btn");
// Declare input variables for our Add A Book! feature.





function addBook1() {
  // take user input fields and add them to a li
  // append the li to the page
  
  
    const li = document.createElement("li");
    const aT = document.createElement("a");
    aT.id = "aT";
    aT.textContent = inpTitle.value + " ";
    // Create separate element for title so that we can append list of author, language, subject, to it later on.

     const ulBook = document.createElement("ul");
     // Create list element for each Book containing Author, Language, Subject.

     const liA = document.createElement("li");
     liA.id = "liA";
     liA.textContent = `Author: ${inpAuthor.value}`;
     // Create list item for Author.

     const liL = document.createElement("li");
     liL.textContent = `Language: ${inpLanguage.value}`;
     // Create list item for Language.

     const liS = document.createElement("li");
     liS.textContent = `Subject: ${inpSubject.value}`;
     // Create list item for Subject.

     ulBook.append(liA, liL, liS);
     // Append our created list items for Subject, Language, and Author to our Book list.
     


     li.append(aT);
     li.append(ulBook);
     // Append list items and title to one whole list item, so that everything is glued together.
  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "-";
  aT.append(removeBtn);
  bookList.append(li);
  removeBtn.addEventListener("click", function () {
    bookList.removeChild(li);
  });
  // Create a remove Button that allows to us to remove our created books from our array.

  return li;
}


addBtn.addEventListener('click', addBook1)
// Create an Event Listener so that when we click Add Book, it shows up within our array.





