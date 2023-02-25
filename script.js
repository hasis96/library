const listOfBooks = document.getElementById("listOfBooks");
const form = document.getElementById("bookForm");

let myLibrary = [
    {
        "title": "Attack on Titan",
        "author": "Hajime Isayama", 
        "status": "Reading",
    },
];

class book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}


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
        let newStatus = document.createElement("button");
        let newRemove = document.createElement("button");

        newBook.classList.add("book");
        newTitle.classList.add("title");
        newAuthor.classList.add("author");

        newStatus.classList.add("status");
        newStatus.setAttribute("type", "button");
        newStatus.id = "newStatus";

        newRemove.classList.add("removeBtn");
        newRemove.setAttribute("type", "button");
        newRemove.id = "newRemove";

        newBook.bookIndex = bookPosition;
        newBook.id = bookPosition;

        newTitle.textContent = currentBook.title;
        newAuthor.textContent = currentBook.author;
        newStatus.textContent = currentBook.status;
        newRemove.textContent = "remove";

        //bookPosition keeps track of the book's index
        //splice to remove targeted book, clear's books, re-creates each book element
        newRemove.addEventListener("click", function() {
            library.splice(bookPosition, 1);
            listOfBooks.replaceChildren();
            displayLibrary(library);
        });

        //rotates newStatus.textContent on click to change statuses
        newStatus.addEventListener("click", function () {
            if (newStatus.textContent == "Not Started") {
                newStatus.textContent = "Reading";
            } else if (newStatus.textContent == "Reading") {
                newStatus.textContent = "Finished";
            } else if (newStatus.textContent == "Finished") {
                newStatus.textContent = "Not Started";
            }
        });
    

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newStatus);
        newBook.appendChild(newRemove);
        listOfBooks.appendChild(newBook);
        }};

//create new Book() with form, then push to myLibrary[];
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const status = document.getElementById('status').value;

    if (title.length === 0 || author.length === 0) {
        alert("Error, please fill out form correctly");
    } else {
        let newBook = new book(title, author, status);
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
