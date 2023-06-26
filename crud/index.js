// let a: number = 23;
// console.log(a);
// function test(num1: number, num2: number): number {
//     return num1 * num2 + 23;
// }
// console.log(test(12, 24));
var Person = /** @class */ (function () {
    function Person(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    Object.defineProperty(Person.prototype, "getBalance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.deposit = function (amount) {
        if (amount > 0) {
            this._balance = this._balance + amount;
        }
        else {
            new Error('Invalid amount');
        }
    };
    return Person;
}());
var person = new Person(123, 'Vikas Maurya', 3400);
person.deposit(23);
console.log(person);
