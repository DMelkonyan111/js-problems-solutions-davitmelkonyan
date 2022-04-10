class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getGender() {
        return this.gender;
    }
    
    get getAge() {
        return this.age;
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

    set setGender(value) {
        if (value.toLowerCase() == "male" || value.toLowerCase() == 'female') {
            this.gender = value;
        } else {
            console.log("Type Male or Female");
        }
    }

    set setAge(value) {
        if (Number(value)) {
            this.age = value;
        } else {
            console.log("Type numbers only");
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.gender}, ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }

    get getPrograms() {
        return this.programs;
    }

    get getYear() {
        return this.year;
    }

    get getFee() {
        return this.fee;
    }

    set setPrograms(value) {
        if (Array.isArray(value) && value.length != 0) {
            let check = true;

            for (let i = 0; i < value.length; i++) {
                if (!value[i]['programName'] || (!Number(value[i]['grade'] && value[i]['grade'] !== undefined))) {
                    check = false;
                    break;
                }
            }

            if (!check) {
                console.log("Please insert the data in appropriate format");
                return;
            }
        } else {
            console.log("Please insert the data in appropriate format");
            return;
        }

        this.programs = value;
    }

    set setYear(value) {
        if (Number(value)) {
            this.year = value;
        } else {
            console.log("Insert letters only;")
        }
    }

    set setFee(value) {
        if (Number(value)) {
            this.fee = value;
        } else {
            console.log("Insert letters only;")
        }
    }

    passExam(programName, grade) {
        let checkProgramName = 0;
        let checkGrades = 1;

        for (let i = 0; i < this.programs.length; i++) {
            if (this.programs[i]['programName'] === programName) {
                this.programs[i]['grade'] = grade;
                checkProgramName++;
            }

            if (this.programs[i]['grade'] < 50) {
                checkGrades = 0;
            }
        }

        if (!check) {
            console.log("Please insert an actual program name");
            return;
        }

        if (checkGrades) {
            this.year++;
        }
    }

    toString() {
        return `
            Student: ${this.firstName} ${this.lastName}, ${this.gender}, ${this.age} years old
            Grade: ${this.year}
            Fee: ${this.fee} AMD
        `;
    }
}

let a = new Student('Davit', 'Melkonyan', 'Male', 18, [{calculus: 95, dMath: 94}], 1, 1200000,);
console.log(a.toString());