// console.log('starting');
// setTimeout(() => {
//     console.log('Executing in 2 seconds');
// }, 2000);
// setTimeout(() => {
//     console.log('Executing in 0 seconds');
// }, 0);
// console.log('ending');
// const fs = require('fs');
// console.log('program started');

// stored in 1st phase
// setTimeout(function () {
//     console.log('timer call-back executed');
// }, 0);



// // I/O related task
// fs.readFile('./input.txt', function () {
//     console.log('File read complete');

//     setTimeout(function () {
//         console.log('timer call-back executed');
//     }, 0);

//     setImmediate(function () {
//         console.log('inside setImmediate');
//     });

//     process.nextTick(function () {
//         console.log('inside process.nextTick queue');
//     })
// })
// // stored in 3rd phase
// // setImmediate(function () {
// //     console.log('inside setImmediate');
// // })
// console.log('program completed');

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter your name: ', function (name) {
//     console.log('Your name is ' + name);
//     rl.close();
// });

// rl.on('close', function () {
//     console.log('readline closed');
//     process.exit(1)
// })

// const fs = require('fs');
// let res
// fs.readFile('./input.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         res = data
//         // console.log(data);
//     }
//     // console.log(data);
// });
// // console.log(text);
// console.log(res);
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// const fs = require('fs');
// const http = require('http');
// const server = http.createServer((req, res) => {
// })

// server.listen(3000, '127.0.0.1', () => {
//     console.log('listening');
// })

// server.on('request', (req, res) => {
//     fs.readFile('./input.txt', (err, data) => {
//         if (err) {
//             res.end(err);
//             return 
//         } else {
//             res.end(data);
//         }
//     })
// })

const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
})

server.listen(3000, '127.0.0.1', () => {
    console.log('listening');
})

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('./input.txt');
//     rs.on('data', (chunk) => {
//         res.write(chunk);
//     })
//     rs.on('end', () => {
//         res.end()
//     })
//     rs.on('error', (error) => {
//         res.end(error.message)
//     })
// })
server.on('request', (req, res) => {
    let rs = fs.createReadStream('./input.txt');
    rs.pipe(res)
    rs.on('data', (chunk) => {
        res.write(chunk);
    })
    rs.on('end', () => {
        res.end()
    })
    rs.on('error', (error) => {
        res.end(error.message)
    })
})