- learn how to use objects (properties/methods) and prototype/prototypal inheritance
- refresh on how to collect user data/input, DOM manipulation, and loops!

initial pseudocode:

    let library [];

    const book {
        title
        author
        pages
        read
    }

    const newBook {
        -use book as prototype to object.create() new books
    }

    const addBook {
        add newly created book into existing library
    }

    using forms, have user input book.properties

    const displayLibrary {
        loop through each book in library[]
            ? create a <ul> for each book, <li> = property
    }