// console.log("vikas");
// let data = [23,45,78,90,12,1,2];
// for(let i = 0;i<data.length;i++){
//     for(let j = 0;j<=i;j++){
//         if(data[i]<data[j]){
//             let temp = data[i]
//             data[i] = data[j]
//             data[j] = temp

//         }
//     }
// }console.log(data);

// let num = 10;
// let arr = [];
// let firstNum = 0;
// let secondNum = 1;
// arr.push(firstNum,secondNum);
// for(let i = 0;i<num-1;i++){
//     let nextNum = firstNum + secondNum
//     arr.push(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }
// console.log(arr);

// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on('sayMyName',()=>{
//     console.log("Your Name is: Vikas Maurya");
// })
// event.on('sayMyName',()=>{
//     console.log("Your Age is: 20yrs");
// })
// event.on('sayMyName',()=>{
//     console.log("Your Gender is: Male");
// })

// event.emit('sayMyName');

// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on('checkPage',(sc,msg)=>{
//     console.log(`status code is ${sc} and the message is ${msg}`);
// })
// event.emit('checkPage',200,'ok')


// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     fs.readFile('input.txt', ((err, data) => {
//         if (err) {
//             return console.log(`${err}`);
//         }
//         else {
//             res.end(data.toString());
//         }
//     }))
// })

// server.listen(5000,()=>{
//     console.log("listening");
// })


// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();
// server.on('request',(req,res)=>{
//     const rStream = fs.createReadStream('input.txt');
//     rStream.on('data', (chunkData) => {
//         res.write(chunkData);
//     })
//     rStream.on('end',()=>{
//         res.end();
//     })
// })

// server.listen(5000, () => {
//     console.log("listening");
// })


// const user = {
//     name:"vikas",
//     class: "1"
// }
// const a = JSON.stringify(user);
// console.log(a);
// let b = JSON.parse(a);
// const c = b.name
// console.log(b.name);

const fs = require('fs');
const obj = {
    name: "Vikash Maurya",
    age: 20,
    gender: "Male",
    tech: "NodeJs",
    exp: 0.2
}
let user = JSON.stringify(obj);
fs.writeFile('./i.txt', user, () => {
    console.log('file Written success.');
})
const d = fs.readFile('./i.txt',(err,data)=>{
    if(err){
        console.log(`${err}`);
    }
    else{
        console.log('file read success');
        console.log(JSON.parse(data));
    }
})








