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



  

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    aT.append(removeBtn);
    removeBtn.addEventListener("click", function () {
      li.remove();
    });
    //Create a remove Button that allows to us to remove books from our array.
    //I realize this permanently removes the books, and this is NOT what we are looking for, but I

    const addCom = document.createElement("button");
    const addComInp = document.createElement("input");
    addComInp.maxLength = "280";
    addCom.textContent = "+";
    addComInp.placeholder = "Add Comment";
    ulBook.append(addCom, addComInp);
    
    addCom.addEventListener("click", function () {
      const comment = document.createElement("li");
      comment.textContent = addComInp.value + " ";
 
      ulBook.append(comment);
    });
    
    
    li.append(aT);
    li.append(ulBook);
    return li;
  };
}


