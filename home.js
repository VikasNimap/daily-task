// console.log("t" + 12344 + 6);   // NaN
// console.log(12344 + 6 + "t");   // NaN

// for (var i = 0; i < 5; i++) {
//     function test(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i);
//     }
//     test(i)
// }

// function test(temp) {
//     console.log('test called');
//     temp()
// }
// test(function temp() {
//     console.log('temp called');
// })


// function test(temp) {
//     return function temp() {
//         console.log("hello");
//     }
// }
// test()()


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('click', function (data) {
//     console.log('Event emitter is logged', data);
// })

// eventEmitter.on('click', function (data) {
//     console.log('Event emitter is logged twice', data);
// })
// const express = require('express');
// const app = express();
// app.listen(3000, '127.0.0.1');
// app.use('/', function (req, res) {
//     eventEmitter.emit('click', 'Hello')
//     res.send({ message: 'hello and welcome' })
// })

// var message = 20;
// console.log(global)

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// class Logger extends EventEmitter {
//     log(message) {
//         console.log(message);
//         this.emit('messageLogged', { id: 1, name: "vikas" })
//     }
// }

// eventEmitter.on('click', function (data) {
//     console.log('Event emitter is logged', data);
// })

// eventEmitter.on('click', function (data) {
//     console.log('Event emitter is logged twice', data);
// })


// let arr = ['Apple', 'Mango', 'Banana', 'Pomegranate'];
// let a = ['Peru', 'Pear']
// let res = arr.splice(1, 1, a);
// // let res = arr.slice(0, -1);
// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// // fruits.splice(2, 2);
// // console.log(fruits);

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let index = 2;
// let fruit = fruits.concat(fruits1);
// console.log(console.log(console.log()));


// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits1.splice(0,2);
// console.log(fruits1);

// console.log(eval('1+3*5'));




// function isPrime (num){
//     if (num === 1 || num === 0) return false;
//     for(i = 2; i < num; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// for(i = 2; i < 100; i++){
//     if(isPrime(i)){
//         console.log(i)
//     }
// }





let num = 3;
while (num <= 3) { 
    
}

// }
// let count = 0;
// let n = 0;
// for (let i = 2; i < Infinity; i++) {
//     count = 0;
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 1) {
//         console.log(i);
//         ++n
//     }
//     if (n === 3) {
//         break
//     }
// }
