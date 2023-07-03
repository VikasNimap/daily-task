// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.getMessage = void 0;
// function getMessage() {
//     console.log('Hello from home.ts');
// }
// exports.getMessage = getMessage;

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('myEvent', (data) => {
//     console.log(data, '- FIRST');
// });

// console.log('Statement A');

// eventEmitter.on("myEvent", data => {
//     console.log(data, '- SECOND');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');

// console.log("Statement B");


// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('myEvent', (data) => {
//     console.log(data, '- FIRST');
// });

// console.log('Statement A');

// eventEmitter.on("myEvent", data => {
//     console.log(data, '- SECOND');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');

// console.log("Statement B");


// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i);
// }

// for (var i = 0; i < 5; i++) {
//     function test(i){
//         setTimeout(function () {
//           console.log(i);
//         }, i);
//     }
//     test(i)
// }


// const fs = require('fs');
// async function printFiles() {
//     const files = ['index.js'] // Assume this works fine

//     files.forEach(async (file) => {
//         const contents = await fs.readFile(file,function(err,data){
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(data);
//         })
//         console.log(contents);
//     })
// }

// printFiles()


// let fs = require('fs');
// fs.readFile('index.tsxt', () => {

// })

let fs = require('fs');
fs.readFile('./index.js','utf-8',function(err,data){
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})