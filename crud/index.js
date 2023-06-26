// let a: number = 23;
// console.log(a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Object.defineProperty(Person.prototype, "getFullName", {
        get: function () {
            return this.fname + this.lname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, fname, lname) {
        var _this = _super.call(this, fname, lname) || this;
        _this.id = id;
        _this.fname = fname;
        _this.lname = lname;
        return _this;
    }
    Object.defineProperty(Student.prototype, "getFullName", {
        get: function () {
            return 'Stud. ' + this.fname + this.lname;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var student = new Student(12, 'Vikas ', 'Maurya');
// console.log(student.getFullName);
// console.log(student);
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(batch, fname, lname) {
        var _this = _super.call(this, fname, lname) || this;
        _this.batch = batch;
        _this.fname = fname;
        _this.lname = lname;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "getFullName", {
        get: function () {
            return 'Prof. ' + this.fname + this.lname;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
// let teacher = new Teacher('Biology', 'Vikas ', 'Maurya');
// console.log(teacher.getFullName);
function printNames(people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        console.log(person.getFullName);
    }
}
printNames([
    new Student(123, 'Vikas ', 'Maurya'),
    new Teacher('Biology', 'Pramod ', 'Yadav'),
    new Person('Akash ', 'Yadav'),
]);
