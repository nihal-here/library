class Book {
  constructor(title, author, page, hasRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.hasRead = hasRead;
  }
}

// myLibrary array of books
const myLibrary = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true),
  new Book("To Kill a Mockingbird", "Harper Lee", 324, false),
  new Book("1984", "George Orwell", 328, true),
];

//function to push books to library
function addBooktoLibrary(title, author, page, hasRead) {
  myLibrary.push(new Book(title, author, page, hasRead));
}

//function to display books
function displayBooks() {
  const booksGrid = document.querySelector("#booksGrid");
  booksGrid.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.page}</p>
        <button class='btn ${getButtonClass(
          book
        )}' onClick=toggleRead(${myLibrary.indexOf(book)})>${getButtonText(
      book
    )}</button>
        <button class='btn btn-remove' onClick='removeBook(${myLibrary.indexOf(
          book
        )})'>Remove</button>
  `;

    booksGrid.appendChild(bookCard);
  });
}

function getButtonClass(book) {
  return book.hasRead ? "btn-green" : "btn-red";
}

function getButtonText(book) {
  return book.hasRead ? "Read" : "Not Read";
}

function toggleRead(index) {
  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  displayBooks();
}

function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#hasRead").value = "";
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
const addBookBtn = document.querySelector("#addBookBtn");
const addBookDialog = document.querySelector("#addBookDialog");
addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
});

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const hasRead = document.querySelector("#hasRead").checked;

  addBooktoLibrary(title, author, pages, hasRead);
  displayBooks();

  addBookDialog.close();
  clearForm();
}

const bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", handleFormSubmit);

displayBooks();
