class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    get getTitle() {
        return this.title;
    }

    get getAuthor() {
        return this.author;
    }

    toString() {
        return `${this.title}, by ${this.author}`;
    }

    isTheSameBook(book) {
        if (book.title === this.title && book.author === this.author) {
            return true;
        }

        return false;
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author);
        this.bookId = bookId;
    }

    get getTitle() {
        return super.getTitle;
    }

    get getAuthor() {
        return super.getAuthor;
    }

    get getBookId() {
        return this.bookId;
    }

    toString() {
        return super.toString() + `, ID #${this.bookId}`;
    }
}

class LibraryBook extends Book {
    constructor(title, author, bookId, quantity) {
        super(title, author);
        this.bookId = bookId;
        this.quantity = quantity;
    }

    get getTitle() {
        return super.getTitle;
    }

    get getAuthor() {
        return super.getAuthor;
    }

    get getBookId() {
        return this.bookId;
    }

    get getQuantity() {
        return this.quantity;
    }

    set setTitle(value) {
        this.title = String(value);
    }

    set setAuthor(value) {
        this.author = String(value);
    }

    set setQuantity(value) {
        if (Number(value)) {
            this.quantity = value;
        } else {
            console.log("Please insert an integer");
        }
    }

    toString() {
        return super.toString() + `, ID #${this.bookId}, ${this.quantity} available`;
    }

    increaseQuantityBy(amount) {
        if (Number(amount) && amount >= 0) {
            this.quantity += amount;
        } else {
            console.log("Please insert an integer");
        }
    }

    decreaseQuantityBy(amount) {
        if (Number(amount) && amount <= this.quantity && amount >= 0) {
            this.quantity -= amount;
        } else {
            console.log("Please insert an integer from 0 to " + this.quantity);
        }
    }
}

class ReaderBook extends Book {
    constructor(title, author, bookId, expirationDate, isReturned) {
        super(title, author);
        this.bookId = bookId;
        this.expirationDate = expirationDate;
        this.isReturned = isReturned;
    }

    get getTitle() {
        return super.getTitle;
    }

    get getAuthor() {
        return super.getAuthor;
    }

    get getBookId() {
        return super.bookId;
    }

    get getExpirationDate() {
        return super.expirationDate;
    }

    get getIsReturned() {
        return super.isReturned;
    }

    set setTitle(value) {
        this.title = String(value);
    }

    set setAuthor(value) {
        this.author = String(value);
    }

    set setExpirationDate(value) {
        this.expirationDate = String(value);
    }

    set setIsReturned(value) {
        if (value === true || value === false) {
            this.isReturned = value;
        } else {
            console.log("Please insert true or false");
        }
    }

    toString() {
        if (this.isReturned) {
            return super.toString() + `, ID #${this.bookId}, Expired on ${this.expirationDate}, returned`;
        } 

        return super.toString() + `, ID #${this.bookId}, Expires on ${this.expirationDate}, not returned`;
    }
}

class Library {
    constructor(books, readers) {
        this.books = books;
        this.readers = readers;
    }

    get getBooks() {
        return this.books;
    }

    get getReaders() {
        return this.readers;
    }

    doHaveBook(requestedBook) {
        this.books.forEach((el, index) => {
            if (el.author === requestedBook.author && el.title === requestedBook.title) {
                return true;
            }
        })

        return false;
    }

    addBook(newBook) {
        this.books.forEach((el, index) => {
            if (el.author === newBook.author && el.title === newBook.title) {
                el.quantity++;
                return
            }
        })

        this.books.push(new LibraryBook(newBook.title, newBook.author, +this.books[this.books.length - 1]['bookId'] + 1, 1));
    }

    addBooks(newBooks) {
        for (let i = 0; i < newBooks.length; i++) {
            for (let j = 0; j < this.books.length; j++) {
                if (newBooks[i]['title'] === this.books[j]['title'] && newBooks[i]['author'] === this.books[j]['author']) {
                    this.books[j]["quantity"]++;
                    newBooks[i]['notAdd'] = true;
                }
            }
        }

        newBooks.forEach((el, index) => {
            if (!el['notAdd']) {
                this.books.push(new LibraryBook(el.title, el.author, +this.books[this.books.length - 1]['bookId'] + 1, 1));
            }
        })

        return this.books;
    }

    checkReaderId(readerId) {
        this.readers.forEach((el, index) => {
            if (el.readerId === readerId) {
                return true;
            }
        })

        return false;
    }

    lendBook(book, readerId) {
        let check = 0;

        for (let i = 0; i < this.readers.length; i++) {
            if (readerId === this.readers[i]['readerId']) {
                check = 1;
                break;
            }
        }

        if (!check) {
            console.log("A reader with this ID was not found");
            return;
        }

        this.books.forEach((el, index) => {
            if (el['author'] === book['author'] && el['title'] === book['title']) {
                if (el.quantity > 0) {
                    // Finding the date of return. The book should be returned after a month
                    let today = new Date();

                    let year = today.getFullYear();
                    let month = today.getMonth() + 1;
                    let day = today.getDate();

                    let nextMonth = month + 1;

                    if (nextMonth == 13) {
                        nextMonth = 1;
                        year++;
                    }

                    day = (day < 10) ? '0' + day : day;
                    nextMonth = (nextMonth < 10) ? '0' + nextMonth : nextMonth;

                    let dayOfReturn = day + '/' + nextMonth + '/' + year;

                    return new ReaderBook(book.title, book.author, el.bookId, dayOfReturn, false);
                } else {
                    console.log("The library has the book, but it is not available right now, please return later");
                }
            } else {
                console.log("The library does not have that book");
            }
        })
    }
}

class Reader {
    constructor(firstName, lastName, readerId, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.readerId = readerId;
        this.books = books;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getReaderId() {
        return this.readerId;
    }

    get getBooks() {
        return this.books;
    }

    set setFirstName(value) {
        let check = /^[A-Za-z]+$/;

        if (value.match(check)) {
            this.firstName = value;
        } else {
            console.log("Type only letters");
        }
    }

    set setLastName(value) {
        let check = /^[A-Za-z]+$/;

        if (value.match(check)) {
            this.lastName = value;
        } else {
            console.log("Type only letters");
        }
    }

    set setBooks(value) {
        if (Array.isArray(value)) {
            let check = 1;

            value.forEach((el, index) => {
                if (!el instanceof ReaderBook) {
                    check = 0;
                }
            })

            if (check) {
                this.books = value;
            } else {
                console.log("Please insert elements from ReaderBook class");
            }
        } else {
            console.log("The inserted value should be an array of books");
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ID: ${this.readerId}`;
    }

    borrowBook(book, library) {
        if (book !== null && book instanceof ReaderBook) {
            library.books.push(book);
        } else {
            console.log("Please insert a valid book");
        }
    }
}