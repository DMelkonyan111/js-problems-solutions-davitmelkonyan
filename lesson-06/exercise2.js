class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    set setName(value) {
        this.name = value;
    }

    get getBalance() {
        return this.balance;
    }

    set setBalance(value) {
        if (value >= 0) {
            this.balance = value;
        } else {
            console.log("Please insert a valid number");
        }
    }

    credit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return "Now the balance is " + this.balance;
        } else {
            console.log("Please insert a valid number");
        }
    }

    debit(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
            } else {
                console.log("Amount exceeded balance");
            }
        } else {
            console.log("Please insert a valid number");
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                anotherAccount.balance += amount;
                this.balance -= amount;
                return "Now the balance is " + this.balance;
            } else {
                console.log("Amount exceeded balance");
            }
        } else {
            console.log("Please insert a valid number");
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id == accountSecond.id && accountFirst.name == accountSecond.name && accountFirst.balance == accountSecond.balance) {
            return "They are the same accounts";
        } else {
            return "They are not the same accounts";
        }
    }

    toString() {
        return `
            Id: ${this.id}
            Name: ${this.name}
            Balance: ${this.balance}
        `;
    }
}