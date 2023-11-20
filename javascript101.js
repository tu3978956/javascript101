// Create an array to store five books
let books = [
    [1, "The Great Gatsby", "F. Scott Fitzgerald", 12.99, 13],
    [2, "To a Mockingbird", "Harper Lee", 14.95, 22],
    [3, "The Hobbit", "George Orwell", 10.99, 5],
    [4, "The Catcher in the Rye", "J.D. Salinger", 11.50, 12],
    [5, "You don't know JS", "J.R.R. Tolkien", 16.99, 9]
];
  
// Fun. to add a new book
function addBook(bookId, bookTitle, author, price, quantity) {
    books.push([bookId, bookTitle, author, price, quantity]);
    console.log(`Book '${bookTitle}' has been added.`);
}

// Fun. to update a book
function updateBook(bookId, bookTitle, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === bookId) {
        books[i] = [bookId, bookTitle, author, price, quantity];
        console.log(`Book '${bookTitle}' has been updated.`);
        return;
        }
    }
    console.log(`Book with ID '${bookId}' does not exist.`);
}

// Fun. to delete a book
function deleteBook(bookId) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === bookId) {
            const [bookTitle] = books[i].slice(1, 2);
            books.splice(i, 1);
            console.log(`Book '${bookTitle}' has been deleted.`);
            return;
        }
    }
    console.log(`Book with ID '${bookId}' does not exist.`);
}

// Fun. to search for a book
function searchBook(criteria, value) {
    let foundBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i][criteria] === value) {
        foundBooks.push(books[i]);
        }
    }
    return foundBooks;
}

// Fun. to sell books and generate an invoice
function sellBooks(bookTitle, quantity, availableBalance) {
    const foundBooks = searchBook(1, bookTitle);
    if (foundBooks.length === 0) {
        console.log(`Book '${bookTitle}' does not exist.`);
        return;
    }

    const [bookId, , , price, stock] = foundBooks[0];
    if (stock < quantity) {
        console.log(`Insufficient quantity for book '${bookTitle}'.`);
        return;
    }

    const totalPrice = price * quantity;
    if (totalPrice > availableBalance) {
        console.log("Insufficient balance.");
        return;
    }

    // Update the stock
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === bookId) {
        books[i][4] -= quantity;
        break;
        }
    }

    console.log(`Book '${bookTitle}' (${quantity}x) sold successfully. Total price: $${totalPrice}`);
}


addBook(6, "The Learn Startup", "Eric Ries", 35.0, 10);
console.log("add other book with id 6",books);


updateBook(3, "The Hobbit: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", 55.0, 8);
console.log("Update Book with id 3",books);


deleteBook(2);
console.log("Delete Book with id 2",books);



const foundBooks = searchBook(3, "The Hobbit: A Handbook of Agile Software Craftsmanship");
console.log("Search for book ",foundBooks);

sellBooks("The Hobbit: A Handbook of Agile Software Craftsmanship", 3, 400.0);
console.log("sell book",books);