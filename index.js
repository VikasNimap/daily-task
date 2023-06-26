// console.log(12345);

// console.log(
//     'vikas' + {}
// );


// let arr = [12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 8, 12, 12, 12, 1, 2, 12, 78, 34];
// let res = arr.filter((ele, i) => {
//     return arr.indexOf(ele) != arr.lastIndexOf(ele) && arr.lastIndexOf(ele) == i
// })
// console.log(res);

// async function test() {
//     console.log('hello');
//     return 1
// }
// function test1() {
//     return new Promise((res, rej) => {
//         res(test().then((d) => {
//             console.log(d);
//         }))
//     })
// }
// test1();


// async function test() {
//     console.log('inside test');
//     return [12, 34, 5, 56, 78, 988];
// }
// // console.log(test());
// async function test1() {
//      console.log(await test())
// }
// test1();


// console.log('start');

// let p1 = new Promise((resolve, reject) => {
//     console.log(1);
// })
// console.log('end');

// console.log('start');

// let p1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
// })
// p1.then((res) => {
//     console.log(res);
// })
// console.log('end');


// console.log('start');

// let p1 = new Promise((resolve, reject) => {
//     console.log(1);
// })
// p1.then((res) => {
//     console.log(2);
// })
// console.log('end');

// console.log('start');
// setTimeout(() => {
//     console.log('setTimeout');
// },);
// Promise.resolve(2).then(function (res) {
//     console.log(res);
// });

// Promise.resolve(3).then(function (r) {
//     console.log(r);
// });
// console.log('end');


// console.log('start');
// let p1 = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log('setTimeout start');
//         resolve(3);
//         console.log('setTimeout end');
//     },);
//     console.log(2);
// })
// p1.then(function (res) {
//     console.log(res);
// });
// console.log('end');


// async function fn(num) {
//     setTimeout(() => {
//         console.log(num * 3);
//     }, 1000);
// }

// async function test() {
//     await fn(3);
//     await fn(5);

// }
// test()


function* test() {
    yield 1;
    yield 3;
    yield 5;
}
const a = test()
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());