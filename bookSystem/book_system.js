let books = [];
let bookName, authorName, bookDescription, pagesNumber, index;

function addBook() {
    bookName = document.getElementById("bookName").value;
    authorName = document.getElementById("authorName").value;
    bookDescription = document.getElementById("bookDescription").value;
    pagesNumber = document.getElementById("pagesNumber").value;

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }

        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function showBooks() {
    const booksDiv = books.map((book, index) => `
    <h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}
    <p><strong>Author Name: </strong>${book.authorName}
    <p><strong>Book Description: </strong>${book.bookDescription}
    <p><strong>No. of Pages: </strong>${book.pagesNumber}<br><br>
    <button onclick="deleteBook(${index})">Delete</button>
    `);

    document.getElementById('books').innerHTML = booksDiv.join("");
}

function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}

// Practice task
function deleteBook() {
    books.splice(index,1);
    showBooks();
}