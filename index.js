// console.log(12345);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// function test(a: number, b: number): number {
//     return a + b
// }
// console.log(test(4, 5));
// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }
//     public get fullName() { return this.firstName + " " + this.lastName }
// }
// let person = new Person('Vikas', 'Maurya');
// console.log(person.fullName);
// class Student extends Person {
//     constructor(public readonly id: number, firstName: string, lastName: string) {
//         super(firstName, lastName)
//     }
//     override get fullName() { return 'Mr. ' + this.firstName + " " + this.lastName }
// }
// let student = new Student(345, 'Vishal', 'Vishwakarma');
// console.log(student);
// class Teacher extends Person {
//     constructor(firstName: string, lastName: string, public subject: string) {
//         super(firstName, lastName)
//     }
//     override get fullName() { return 'Prof. ' + .fullName /*this.firstName + " "  /*this.lastName*/ }
// }
// printNames([
//     new Student(123, 'Vikas', 'Maurya'),
//     new Teacher('Pranil', 'Meherkar', 'Physics')
// ])
// function printNames(people: Person[]) {
//     for (let person of people) {
//         console.log(person.fullName);
//     }
// }
// let a = 0; 
// let b = 1;
// console.log(a|b);
// try {
//     try {
//         throw new Error('inside try error')
//     } catch (error) {
//         // console.log(error, '---------------');
//         throw error
//     }
// } catch (error) {
//     console.log('inside last error', error.message);
// }
// const myIterable = {
//     [Symbol.iterator]() {
//         let count = 1;
//         return {
//             next() {
//                 if (count <= 5) {
//                     return { value: count++, done: false }
//                 }
//                 return { done: false }
//             }
//         }
//     }
// }
// for (let index of myIterable) {
// console.log(index);
// }
// const maxValue = 25;
// printSquares();
// function printSquares() {
//     // for (let i = 0; i <= maxValue; i++) {
//         // First get the squared value.
//         let square = maxValue ** (1 / 2);
//         // Now print the squared value.
//         console.log(square);
//     // }
// }
// let arr = [12, 34, 56, 78, 0];
// // let test = () => arr
// let test = () => { return arr }
// console.log(test());
// let x: [string, number, string];
// x = ['vikas',Number('123'), 'vikas'];
// console.log(x);
// x[0]='vishal';
// console.log(x);
// let s1 = Symbol();
// console.log(s1);
// const promiseAll = (a: number, string: string) => {
//     return function (resolve, reject) {
//         if (a) {
//             setTimeout(() => {
//                 resolve(a)
//             }, 1000)
//         } else {
//             reject('not resolved')
//         }
//     }
// }
// let P1 = new Promise(promiseAll(10, "first"));
// let P2 = new Promise(promiseAll(20, "second"));
// let P3 = new Promise(promiseAll(30, "third"));
// Promise.all([P1, P2, P3]).then((result) => {
//     console.log("its resolved", result)
// }).catch((error) => {
//     console.log("it failed", error)
// })
// function test(a: number) {
//     return new Promise((resolve, reject) => {
//         if (a) {
//             resolve(a)
//         } else {
//             let err = new Error('cannot resolve.')
//             reject(err)
//         }
//     })
// }
// test(0).then((data) => console.log(data)).catch((err) => console.log(err.message))
// let num = 64;
// let res = num ** (1 / 2);
// console.log(res);
// let arr = ['vikas', 12345, 'nony', 'chinmay'];
// let map = arr.map((ele: string | number) => {
//     if (typeof ele === "string") {
//         console.log(ele.toUpperCase());
//     } else {
//         console.log(ele * 10);
//     }
// });
// function add(a: string | number, b: string | number) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b
//     } else {
//         return a + ' ' + b
//     }
// }
// console.log(add(12,34));
// let a = 'hello';
// a="string"
// type person = { name: string, age: number, email: string }
// let details: person = {
//     name: "Vikas",
//     age: 23,
//     email: 'vikas@gmail.com'
// }
// console.warn(details.email.toUpperCase());
// let person = {};
// person.name = 'vikas';
// person.age = 56;
// function test(a: string, b: string): string {
//     a.trim(), b.trim()
//     let c = a + b
//     return c.length.toString()
// }
// console.log(test('Vikas ', 'Maurya'));
// type Role = [number, number, number, number, number, number];
// type data = { name: string, age?: string, email: string, isActive?: boolean };
// let role: data{} = ['vikas', '23', 'vikas@gmail.com', true];
// type data = [name: string, age?: string, email?: string, isActive?: boolean]
// let d1: data = ['vikas', '23 years', 'vikas@gmail.com', true];
// d1.forEach((e) => {
//     console.log(e);
// })
// let map = new Map();
// map.set('name', 'Vikas');
// map.set('email', 'vikas@gmail.com');
// map.set('phone', '1234567890');
// map.set('id', '123');
// // console.log(map);
// // console.log(map.get('name'));
// console.log(map.get('name'));
// let arr = [12,34,5,67,89,12];
// let a = new Set(arr);
// console.log(a);
// console.log(arr);
// let data = [{
//     name: 'vikas'}, {name: 'ramehs'
// }, { name: 'visha'
// }, {name: '45tf'
// }, {
// name: '344'
// }, {
//     name: 'vikas'
// }, {
//     name: 'vikas'
// }, {
//     name: 'vikas'
// }, {
//     name: 'vikas'
// }]
// const uniqueAuthors = data.reduce((accumulator, current) => {
//   if (!accumulator.find((item) => item.name=== current.name)) {
//     accumulator.push(current);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueAuthors)
// let data = [{
//     name: 'vikas'
// }, {
//     name: 'ramehs'
// }, {
//     name: 'vishal'
// }, {
//     name: '45tf'
// }, {
//     name: '344'
// }, {
//     name: 'Djanyo'
// }, {
//     name: '     '
// }, {
//     name: 'vikas'
// }, {
//     name: '45678'
// }]
// let unique = data.reduce((acc:any, curr:any) => {
//     if (!acc.find((item) => item.name === curr.name)) {
//         acc.push(curr)
//     }
//     return acc
// }, [])
// console.log(unique);
function temp() {
    return __awaiter(this, void 0, void 0, function () {
        var test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://www.youtube.com/watch?v=OvexMCKAXks&list=PL8p2I9GklV44eT51JPju4LsTQlce6DPtx&index=10')];
                case 1:
                    test = _a.sent();
                    console.log(test);
                    return [2 /*return*/];
            }
        });
    });
}
temp();
