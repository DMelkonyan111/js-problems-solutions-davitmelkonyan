class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get getName() {
        return this.name;
    }

    get getEmail() {
        return this.email;
    }

    get getGender() {
        return this.gender;
    }

    toString() {
        return `The author is ${this.name}, his email is ${this.email}, he is ${this.gender}`;
    }
}

class Book {
    constructor(author, title, price, quantity) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    get getAuthor() {
        return `The author is ${this.author.name}, his email is ${this.author.email}, he is ${this.author.gender}`;
    }

    set setAuthor(value) {
        if (value.name && value.email && value.gender) {
            this.author = value;
        } else {
            console.log('Please enter an instance of Author class');
        }
    }

    get getTitle() {
        return `The title of the book is ${this.title}`;
    }

    set setTitle(value) {
        this.title = String(value);
    }

    get getPrice() {
        return `The price of the book is ${this.price} AMD`;
    }

    set setPrice(value) {
        if (!isNaN(Number(value))) {
            this.price = value;
        } else {
            console.log("Please insert a number");
        }
    }

    get getQuantity() {
        return `There are ${this.quantity} prints of the book`;
    }

    set setQuantity(value) {
        if (!isNaN(Number(value))) {
            this.quantity = value;
        } else {
            console.log("Please insert a number");
        }
    }

    getProfit() {
        return `The profit is ${this.price * this.quantity} AMD`;
    }

    toString() {
        return `
            Author: ${this.author.name}, ${this.author.email}, ${this.author.gender}
            Title: ${this.title}
            Price: ${this.price} AMD
            quantity: ${this.quantity}
        `;
    }
}
