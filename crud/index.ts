// let a: number = 23;
// console.log(a);

// function test(num1: number, num2: number): number {
//     return num1 * num2 + 23;
// }
// console.log(test(12, 24));

// class Person {
//     constructor(public readonly id: number, public owner: string, private _balance: number) {
//     }
//     get getBalance() {
//         return this._balance;
//     }
//     deposit(amount: number): void {
//         if (amount > 0) {
//             this._balance = this._balance + amount;
//         } else {
//             new Error('Invalid amount');
//         };
//     };
// };
// const person = new Person(123, 'Vikas Maurya', 3400);
// person.deposit(23);
// console.log(person);

class Person {
    constructor(public fname: string, public lname: string) {
    }
    get getFullName() {
        return this.fname + this.lname
    }
}

class Student extends Person {
    constructor(public id: number, public fname: string, public lname: string) {
        super(fname, lname)
    }
    get getFullName() {
        return 'Stud. ' + this.fname + this.lname
    }
}

const student = new Student(12, 'Vikas ', 'Maurya');
// console.log(student.getFullName);
// console.log(student);

class Teacher extends Person {
    constructor(public readonly batch: string, public fname: string, public lname: string) {
        super(fname, lname)
    }
    override get getFullName() {
        return 'Prof. ' + this.fname + this.lname;
    }
}

// let teacher = new Teacher('Biology', 'Vikas ', 'Maurya');
// console.log(teacher.getFullName);

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.getFullName);
    }
}

printNames([
    new Student(123, 'Vikas ', 'Maurya'),
    new Teacher('Biology', 'Pramod ', 'Yadav'),
    new Person('Akash ', 'Yadav'),
]);
