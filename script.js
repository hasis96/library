const listOfBooks = document.getElementById("listOfBooks");
const form = document.getElementById("bookForm");

let myLibrary = [
    {
        "title": "Attack on Titan",
        "author": "Hajime Isayama", 
        "read": "Reading",
    },
];


function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    };

//loops through each object in library[], creates an element for each key/value
//and appends each element back to the library[]
displayLibrary(myLibrary);  
function displayLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        let currentBook = library[i];
        let bookPosition = [i];

        let newBook = document.createElement("div");
        let newTitle = document.createElement("p");
        let newAuthor = document.createElement("p");
        let newRead = document.createElement("p");
        let newRemove = document.createElement("button");

        newBook.classList.add("book");
        newTitle.classList.add("title");
        newAuthor.classList.add("author");
        newRead.classList.add("read");
        newRemove.classList.add("removeBtn");
        newRemove.setAttribute("type", "button");
        newRemove.id = "newRemove";

        newBook.bookIndex = bookPosition;
        newBook.id = bookPosition;

        newTitle.textContent = currentBook.title;
        newAuthor.textContent = currentBook.author;
        newRead.textContent = currentBook.read;
        newRemove.textContent = "remove";


        //bookPosition keeps track of the book's index
        //splice to remove targeted book, clear's books, re-creates each book element
        newRemove.addEventListener("click", function() {
            library.splice(bookPosition, 1);
            listOfBooks.replaceChildren();
            displayLibrary(library);
        })

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newRead);
        newBook.appendChild(newRemove);
        listOfBooks.appendChild(newBook);

        }};

//create new Book() with form, then push to myLibrary[];
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const read = document.getElementById('read').value;

    if (title.length === 0 || author.length === 0) {
        alert("Error, please fill out form correctly");
    } else {
        let newBook = new book(title, author, read);
        myLibrary.push(newBook);    
    }  
};

//form adds input data into a book, adds to library[], clears library (to avoid duplicates)
//then takes each book, creates elements for each key/value
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    listOfBooks.replaceChildren();
    displayLibrary(myLibrary);
    form.reset();
});
