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
