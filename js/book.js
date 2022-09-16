function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  // Define the properties of each book: author, language, subject, title.

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = () => {
    const li = document.createElement("li");
    const aT = document.createElement("a");
    aT.id = "aT";
    aT.textContent = this.title + " ";
    // Create separate element for title so that we can append list of author, language, subject, to it later on.

    const ulBook = document.createElement("ul");
    // Create list element for each Book containing Author, Language, Subject.

    const liA = document.createElement("li");
    liA.id = "liA";
    liA.textContent = `Author: ${this.author}`;
    // Create list item for Author.

    const liL = document.createElement("li");
    liL.textContent = `Language: ${this.language}`;
    // Create list item for Language.

    const liS = document.createElement("li");
    liS.textContent = `Subject: ${this.subject}`;
    // Create list item for Subject.

    ulBook.append(liA, liL, liS);
    // Append our created list items for Subject, Language, and Author to our Book list.



    li.append(aT);
    li.append(ulBook);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    aT.append(removeBtn);
    removeBtn.addEventListener("click", function () {
      li.remove();
    });


    const addCom = document.createElement("button");
    const addComInp = document.createElement("input");
    const comment = document.createElement("li")
    addCom.textContent = "+";
    addComInp.placeholder = "Add Comment";
    comment.textContent = addComInp.value + " ";
    ulBook.append(addCom, addComInp, comment);
    
    addCom.addEventListener("click", this.render)

    return li;
  };
  // Create list item representing a Book and include the title of the Book in the list item.
  /* NOTE: Favorite Feature is currently not implemented. */
}


