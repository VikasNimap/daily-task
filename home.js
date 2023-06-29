// console.log("Namaste Javascript");

// function x() {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     console.log('Namaste JavaScript');
// }
// x();
// // i = 3
// console.log(i);

// let str = 'vikas';
// console.log(str.substring(1,2))
// console.log(str.substring(2))
// console.log(str.substring(3))
// console.log(str.substring(4))
// console.log(str.substring(5))


// function test() {
//     for(var i = 0;i<5;i++){

//     }
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// console.log(i);
// test()

// function test() {
//     for (var i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log('Namaste JavaScript');
// }
// test();

// function test() {
//     for (var i = 1; i < 5; i++) {
//         function temp(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//         }
//         temp(i)
//     }
//     console.log('Namaste JavaScript');
// }
// test();

// function fact(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return num * fact(num - 1)
// }
// console.log(fact(6));


// function x() {
//     var a = 7;
//     function y() { 
//         console.log(a);
//     }
//     return y
// }
// x()()


// let str = 'vikas';
// console.log(str.substr(1, 2));

// let str1 = 'vikas';
// console.log(str1.substring(1, 2));

// function test() {
//     var i = 1;
//     function y() {
//         console.log(i);
//     }
//     i = 100;
//     return y;
// }
// let z = test();
// console.log(z());
// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();

// server.listen(3000, '127.0.0.1', function () {
//     console.log('server started.');
// })

// server.on('request', function (req, res) {
//     fs.readFile('./file.xt', 'utf-8', function (err, data) {
//         if(err){
//             console.log('Error in file reading:',err);
//             return 
//         }
//         fs.readFile('./file1.txt','utf-8',function (err,data1){
//             if(err){
//                 console.log('Error in 2nd file',err);
//                 return 
//             }
//             console.log('File data is ',data);
//             console.log('File1 data is ',data1);
//         })
//     })
// })

// function x(x, y) {
//     console.log(x * y);
// }

// let multiply = x.bind(this,2);
// multiply(3)

// server.on('request', function (req, res) {
//     let rs = fs.createReadStream('./file.txt');
//     // rs.on('data', function (chunk) {
//         rs.pipe('./x.txt',)
//     // })
// })


// const fs = require('fs');

// console.log('Program started');

// fs.readFile('./file1.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log('Error', err);
//         return
//     }
//     console.log(data);
// })
// setTimeout(() => {
//     console.log('Inside Timeout');
// }, 100);

// setImmediate(() => {
//     console.log("Inside setImmediate");
// });

// console.log('Program finished');

// {
//     var a = 100;
//     console.log(a);
//     var a = 40;
// }
// console.log(a);

