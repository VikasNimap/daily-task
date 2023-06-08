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
// class Account {
//     // // readonly id: number;
//     // // owner: string;
//     // // private _balance: number;
//     // nickname?: string;
//     constructor(
//         public readonly id: number,
//         public owner: string,
//         private _balance: number,
//         public nickname?: string) {
//         // this.id = id;
//         // this.owner = owner;
//         // this._balance = balance;
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error('Invalid amount')
//         } else {
//             this._balance += amount
//         }
//     }
//     calculateTax(): number {
//         return this._balance * 2.5
//     }
//     getBalance(): number {
//         return this._balance;
//     }
// }
// let account = new Account(123, 'Vikas Maurya', 500);
// account.deposit(2000);
// console.log(account.getBalance());
// console.log(account.calculateTax());
// let newAccount = new Account(12,'vik',3493430);
// console.log(newAccount.getBalance())
// class Account {
//     constructor(
//         public readonly id: number,
//         public owner: string,
//         private _balance: number,
//         public nickname?: string) {
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error('Invalid amount')
//         } else {
//             this._balance += amount
//         }
//     }
//     calculateTax(): number {
//         return this._balance * 2.5
//     }
//     get balance(): number {
//         return this._balance;
//     }
//     set balance(value: number) {
//         if (value < 0) {
//             throw new Error('Invalid value')
//         } else {
//             this._balance = value
//         }
//     }
// }
// let newAccount = new Account(12, 'vik', 102);
// console.log(newAccount.balance)
// console.log(newAccount.balance=234);
// console.log(newAccount.balance);
// let data = {};
// data.name = 'vikas'
// class seatAssignment {
//     // Index signature property
//     [seatNumber: string]: string | number
// }
// let seat = new seatAssignment();
// seat.A1 = 'vikas';
// seat.B1 = 'major';
// seat.C1 = 'satendra';
// seat.D1 = 'mali';
// seat.E1 = 123456;
// console.log(seat);
// class Account {
//     constructor(public readonly id: number, public owner: string) {
// console.log('hoo');
//     }
// }
// console.log(Account.caller);
// let a = '1234567890';
// let b = Array.from(a);
// console.log(b);
// console.log( console.log(j))
// class seatNumber {
//     [index: string]: string
// }
// let seat = new seatNumber();
// seat.s1 = 'vihal'
// console.log(seat);
var Ride = /** @class */ (function () {
    function Ride() {
    }
    Ride.prototype.start = function () { Ride.activeRides++; };
    Ride.prototype.stop = function () { Ride.activeRides--; };
    Ride.activeRides = 0;
    return Ride;
}());
var ride = new Ride();
ride.start();
ride.start();
console.log(Ride.activeRides);
ride.stop();
ride.stop();
console.log(Ride.activeRides);
