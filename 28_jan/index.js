// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// let num = 15;
// let arr = [];
// let firstNum = 0;
// arr.push(firstNum);
// let secondNum = 1;
// arr.push(secondNum);
// for(let i = 0;i<=num;i++){
//     let nextTerm = firstNum + secondNum
//     arr.push(nextTerm)
//     firstNum = secondNum
//     secondNum = nextTerm
// }
// console.log(arr);
// function recursion(num){
//     if(num)==0{
//         return 1
//     }
//     else{
//         let firstNum = 0;
//         let secondNum = 1;
        
//     }
// }
// let data = [12,45,2,7,56,11];
// for(let i = 0;i<data.length;i++){
//     for(let j = 0;j<=i;j++){
//         if(data[i]>data[j]){
//             temp = data[i]
//             data[i]=data[j]
//             data[j]=temp
//         }
//     }
// }
// console.log(temp);

// let data = 50;
// let arr = [];
// let count = 0;
// for(let i =2;i<=data;i++){
//     count = 0
//     for(let j = 0;j<=i;j++){
//       if(i%j==0) {
//           count ++
//       }
//     }
//     if(count==1){
//         arr.push(i)
//     }
// }
// console.log(arr);

// let data = 50;
// let arr = [];
// let count = 0;
// for (let i = 2; i <= data; i++) {           //i=2
//     count = 0                               //0
//     for (let j = 1; j <= i; j++) {          //j=1
//         if (i % j == 0) {
//             count++                         //2
//         }
//     }
//     if (count == 2) {
//         arr.push(i)
//     }
// }
// console.log(arr);
// const http = require('http');
// http.createServer()
// const express= require('express') ;
// const app = express();
// app.listen(3000,()=>{
//     console.log('listening');
// })
// exports.middleWare = (req,res,next)=>{
//     const flag = req.params.value;
//     if(!flag){
//         return res.send(`not valid`)
//     }
//     else if(flag!="true"){

//         return res.send('false')
//     }
//     else{
//         next()
//     }
// }

// exports.getTime = (req,res)=>{
//     const time = new Date();
//     res.send({result:time});
//     console.log("hello");
// }
// app.get('/time/:value',this.middleWare,this.getTime);

// const user = {
//     id:1,
//     name:"vikas",
//     roleId:1
// }
// const role = {
//     id:1,
//     role:"admin",
//     userId:1
// }

// SELECT * from user.roleId
// INNER JOIN ON table2
// from table1.columnName=table2.columnName;