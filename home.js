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

// let arr = ['abc', '123', 34, 56];
// for (let ele in arr) {
//     console.log(arr[ele]);
// }

// let arr = [1, 45, 67, 3, 2];
// let position;
// let ele = 67;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ele) {
//         position = i
//     }
// }
// for (let i = position; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
// }
// arr.length=arr.length-1
// console.log(arr);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i]
// }
// for (let i = 0; i < arr2.length; i++) {
//     arr3[arr1.length + i] = arr2[i]
// }
// console.log(arr3);



// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [];
// let a1 = 0;
// let a2 = 0;
// let a3 = 0;
// while () {
//     if (arr1[a1] < arr2[a2]) {
//         arr3[d3] = arr1[a1]
//         a3++
//         a1++
//     } else {
//         arr3[d3] = arr2[a2]
//         a3++
//         a2++
//     }
// }

// let details = {
//     name: 'vikas',
//     email: 'vikas@gmail.com',
//     adderss: {
//         home: [/*'new York', 'Mumbai', 'uttar Pradesh'*/],
//         work: ['Bangalore', 'Madhya Pradesh']
//     }
// }

// console.log(details?.adderss?.home?.length?.pune);


