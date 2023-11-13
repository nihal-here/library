const myLibrary = [];

class Book {
  constructor(title, author, page, hasRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.hasRead = hasRead;
  }
}

class Library {
  constructor(myLibrary) {
    this.myLibrary = myLibrary;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const addBookBtn = document.querySelector("#addBookBtn");
const addBookDialog = document.querySelector("#addBookDialog");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPage = document.querySelector("#pages");
const hasRead = document.querySelector("#hasRead");
const bookForm = document.querySelector("#bookForm");

addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
});
