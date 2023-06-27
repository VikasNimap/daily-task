// console.log(12345);

// function test(num1: number, num2: number): number {
//     return num1 + num2
// }

// console.log(test(23, 45));

// class Person {
//     constructor(public fname: string, public lname: string) {
//     }
//     get fullName() {
//         return this.fname + " " + this.lname
//     }
// }
// const person = new Person('Vikas', 'Maurya');
// console.log(person);

// console.log(person.fullName);

// class Student extends Person {
//     constructor(public fname: string, public lname: string) {
//         super(fname, lname)
//     }
//     get fullName() {
//         return "Master" + " " + this.fname + " " + this.lname
//     }
// }
// const student = new Student('Vikas', 'Maurya');
// console.log(student.fullName);

// class Principal extends Person {
//     constructor(public fname: string, public lname: string) {
//         super(fname, lname)
//     }
//     get fullName() {
//         return "Principal" + " " + this.fname + " " + this.lname
//     }
// }

// const principal = new Principal('Akash', 'Gaikwad');
// console.log(principal.fullName);


// class Account {
//     constructor(public readonly id: number, public owner: string, private _balance: number) {
//     }
//     get accountBalance() {
//         return this._balance
//     }
//     deposit(amount: number) {
//         if (amount > 0) {
//             this._balance = this._balance + amount
//         } else {
//             return new Error('Invalid amount')
//         }
//     }
// }
// const account = new Account(123, 'Vikas', 12500);
// account.deposit(20);
// console.log(account.accountBalance);

// enum Role { 'Admin', 'Editor', 'User' };
// console.log(Role.Admin);
// console.log(Role.User);

// function test(id: number) {
//     if (id === 0) {
//         console.log('Admin access granted');
//     } else {
//         console.log('Access Denied');
//     }
// }
// test(0);

// enum Role { 'Admin' = 'A', 'Editor' = 'E', 'User' = 'U' };
// console.log(Role.Editor);

// function calculateTax(amount: number, taxYear?: number): number {
//     if (amount < 50000 && taxYear == 2016) {
//         return amount * 1.2
//     } else {
//         return amount * 1.3
//     }
// }
// console.log(calculateTax(2323, 2019));
type person = { name?: string, email?: string, contact?: string }
let details: person = {};
details.name = 'Vikas';
details.email = 'vikas@gmail.com';
console.log(details.contact);
