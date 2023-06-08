// console.log('Hello world');
// class Account {
//     readonly id: number;
//     owner: string;
//     balance: number;
//     nickName?: string;
//     constructor(id: number, owner: string, balance: number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error('Invalid amount')
//         } else {
//             this.balance += amount
//         }
//     }
// }
// const account = new Account(1, 'Mr. Vikas Maurya', 500);
// // account.deposit(500);
// // console.log(account instanceof Account);
// // account.id = 0
// console.log(account);
// class Account {
//     readonly id: number;
//     owner: string;
//     private _balance: number;
//     nickName?: string;
//     constructor(id: number, owner: string, balance: number) {
//         this.id = id;
//         this.owner = owner;
//         this._balance = balance;
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error('Invalid amount')
//         } else {
//             this._balance += amount
//         }
//     }
//     private calculateTax() {
//     }
//     getBalance(): number {
//         return this._balance
//     }
// }
// const account = new Account(1, 'Mr. Vikas Maurya', 500);
// account.deposit(500);
// console.log(account instanceof Account);
// account.id = 0
// console.log(account.getBalance());
// class Account {
// readonly id: number;
// owner: string;
// private _balance: number;
// nickName?: string;
// constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number) {
//     // this.id = id;
//     // this.owner = owner;
//     // this._balance = balance;
// }
// deposit(amount: number): void {
//     if (amount <= 0) {
//         throw new Error('Invalid amount')
//     } else {
//         this._balance += amount
//     }
// }
// private calculateTax() {
// }
//     get balance(): number {
//         return this._balance
//     }
//     set balance(value: number) {
//         if (value < 0) {
//             throw new Error('Invalid value')
//         } else {
//             this._balance = value
//         }
//     }
// }
// const account = new Account(1, 'Mr. Vikas Maurya', 500);
// console.log(account.balance);
// account.balance = 2
// console.log(account.balance);
// class seatAssignment {
// A1,A2...
// Mosh, John...
// A1: string
// A2: string
// Index signature property
//     [seatNumber: string]: string
// }
// let seats = new seatAssignment();
// seats.A1 = 'vikas';
// seats.A2 = 'vishal';
// seats.S3 = 'Akash';
// console.log(seats);
// class Ride {
// passengers
// pickUp Location
// drop Location
//     private static _activeRides: number = 0;
//     start() { Ride._activeRides++ }
//     stop() { Ride._activeRides-- }
//     static get activeRides() {
//         return Ride._activeRides;
//     }
// }
// let ride = new Ride();
// ride.start()
// let ride1 = new Ride();
// ride1.start()
// Ride.activeRides = 6
// console.log(Ride.activeRides);
// console.log(Ride.activeRides);
// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }
//     get fullName() {
//         return this.firstName + " " + this.lastName
//     }
//     walk() {
//         console.log('walking');
//     }
// }
// class Student extends Person {
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName)
//     }
//     takeTest() {
//         console.log('taking test');
//     }
// }
// let student = new Student(1, 'Vikas', 'Maurya');
// // student.
// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }
//     get fullName() {
//         return this.firstName + " " + this.lastName
//     }
//     walk() {
//         console.log('walking');
//     }
// }
// class Teacher extends Person {
//     override get fullName() {
//         return 'Professor ' + super.fullName
//     }
// }
// let teacher = new Teacher('Vikas', 'Maurya');
// console.log(teacher.fullName);
var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        else {
            this._balance += amount;
        }
    };
    Account.prototype.calculateTax = function () {
        return this._balance * 2.5;
    };
    Account.prototype.getBalance = function () {
        return this._balance;
    };
    return Account;
}());
var account = new Account(123, 'Vikas Maurya', 500);
account.deposit(2000);
console.log(account.getBalance());
console.log(account.calculateTax());
