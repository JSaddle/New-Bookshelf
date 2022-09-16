// --------------------------
//#region Initialization
// --------------------------
const bookList = document.querySelector(".books");
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

const render = () => {
  bookList.replaceChildren(bookshelf.render());
};

// Render the first time the page loads
bookshelf.filterVisibleBooks(() => true);
bookshelf.sortVisibleBooks((a, b) => (a.title.localeCompare(b.title)));
render();

//#endregion Initialization

// --------------------------
//#region Searching
// --------------------------

const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => (b.title.toLowerCase().includes(query)
    || b.author.toString().toLowerCase().includes(query)
    || b.subject.toString().toLowerCase().includes(query)
    || b.language.toString().toLowerCase().includes(query));
  bookshelf.filterVisibleBooks(searchFn);
  render();
});


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

//#endregion Sorting






const inpTitle = document.querySelector("#addTitle");
const inpAuthor = document.querySelector("#addAuthor");
const inpLanguage = document.querySelector("#addLanguage");
const inpSubject = document.querySelector("#addSubject");
const addBtn = document.querySelector("#add-btn");






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
  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "-";
  aT.append(removeBtn);
  bookList.append(li);

  removeBtn.addEventListener("click", function () {
    bookList.removeChild(li);
  });
  return li;
}


addBtn.addEventListener('click', addBook1)






