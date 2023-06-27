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
// type person = { id: number, name?: string, email?: string, contact?: string }
// let details: person = { id: 1 };
// details.name = 'Vikas';
// details.email = 'vikas@gmail.com';
// details.contact = '2382832323';
// console.log(details.contact);

// let sales: number = 12_34_56_789;

// let numbers: number[] = [12, 34, 56, 78];
// console.log(numbers);

// let user: [object, string, string, string, string] = [{ id: 181, name: 'vikas' }, 'Vikas', 'vikas@gmail.com', 'Vikas@123', '8988988989'];
// console.log(user);
// let data = { details: { name: 'vikas', location: { office: 'Turbhwe', residence: 'Kalwa' } } };
// function test() {
//     if (data.details.location.residence)
//         console.log(data.details.location.residence);
// }
// test()


// let speed: number | null = 45;
// let ride = {
// Falsy (undefined,null,0,false,'')
//     speed: speed ? speed : 30
// }
// speed = 40
// console.log(ride);

// let quantity: 50 | 20 = 20;
// console.log(quantity);


// type Quantity = 40 | 50;
// let quantity: Quantity = 40;
// console.log(quantity);

// getName()
// function getName() {
//     console.log('Namaste JavaScript');
// }

// let x = 6;
// let x = 4;
// a();
// b();
// console.log(x);

// function a() {
//     let x = 40;
//     console.log('Inside a', x);
// }
// function b() {
//     let x = 50;
//     console.log('Inside b', x);
// }

// var a = 20;
// console.log(this.a);

// let a;
// a = 4;
// console.log(a);
// function double(x: number) {
//     return x * 2
// }
// let arr = [12, 34, 1, 2, 3];
// let res = arr.map(double);
// console.log(res);

// let arr = [12, 34, 1, 2, 3];
// let res = arr.map((ele) => ele.toString(2));
// console.log(res);

// let arr = [12, 34, 5, 3, 4, 2];
// let res = arr.filter((ele) => ele % 4 == 0);
// console.log(res);

let arr = [12, 34, 5, 3, 4, 2];
let res = arr.reduce((acc, curr) => {
    return acc *= curr
})
console.log(res);
