// let arr = ['vikas', 'akash', 'pranil', 'vikas', 'pranil'];
// let query = {};
// for (let i = 0; i < arr.length; i++) {
//     if (query[arr[i]]) {
//         query[arr[i]]++
//     } else {
//         query[arr[i]] = 1
//     }
// }
// console.log(query);


// let arr = ['vikas', 'akash', 'pranil', 'vikas', 'pranil'];
// let count = ''
// function freq() {
//     let reducer = arr.reduce((acc, curr) => {
//         if (curr in acc) {
//             acc[curr]++
//         } else {
//             acc[curr] = 1
//         }
//         return acc
//     }, {});
//     return reducer
// }


// console.log(freq());

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 5 == 0) {
//             console.log('buzz');
//         } else if (i % 3 == 0) {
//             console.log('fizz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(5);

// let str = 'Welcome to this Javascript Guide';
// let res = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);


// let str = 'Welcome to this Javascript Guide';
// let str = 'vikas maurya';
// let res = str.split(" ").reverse().join(" ").split("").reverse().join("");
// console.log(res);

// let arr = ['vikas','vishal','akash','pranil'];
// arr = []
// console.log(arr);

// function test(acc, callback) {
//     console.log('inside test', acc);
//     callback(15)
// }

// test(12, function (v) { console.log('unside callback', v); })

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function userInput(cb) {
//     let name = 'vikas';
//     cb(name)
// }

// userInput(greet)

// function test() {
//     return new Promise((res, rej) => {
//         res(console.log('hii'))
// })
    
// }
//  function temp() {
//      test()
//     console.log('hello');
// }
// function testing() {
//     console.log('in testing');
// }
// test()
// temp()
// testing()
// console.log('outaide fn');

