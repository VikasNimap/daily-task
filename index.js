// console.log(12345);
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
var arr = ['vikas', 12345, 'nony', 'chinmay'];
var map = arr.map(function (ele) {
    if (typeof ele === "string") {
        console.log(ele.toUpperCase());
    }
    else {
        console.log(ele * 10);
    }
});
