function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  // Define the properties of each book: author, language, subject, title.

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
    // Create a remove Button that allows to us to remove books from our array.
    // I realize this permanently removes the books, and this is NOT what we are looking for, but I
    // had trouble implementing this feature so that the book still stays in our array on the back end.
    // I know we would use .splice to remove the books from the array, however I had an issue with putting the function in the right place
    // so that I could properly refer to the array that the books are in.

    const addCom = document.createElement("button");
    const addComInp = document.createElement("input");
    addComInp.maxLength = "280";
    addCom.textContent = "+";
    addComInp.placeholder = "Add Comment";
    ulBook.append(addCom, addComInp);
    // Create an Add Comment Button, set max length of comment to 280 characters, append the comment to our Book.


    addCom.addEventListener("click", function () {
      const comment = document.createElement("li");
      comment.textContent = addComInp.value + " ";
      comment.id = "comment";
      ulBook.append(comment);
    });
    // Create an Event Listener so that when we add a comment, our input actually shows up within the Book.
    
    li.append(aT);
    li.append(ulBook);
    return li;
    // Append all created items to our "li", which is our Book as whole. This way everything is glued together in one place.
  };
}


