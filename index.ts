// // console.log("Hii, this is test coding.");

// let data: number[] = [12, 35, 1, 10, 34, 1, 35];
// let max1: number = 0;
// let max2: number = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max1) {
//         max2 = max1
//         max1 = data[i]
//     } else if (max1 > data[i] && max2 < data[i]) {
//         max2 = data[i]
//     }
// }
// console.log(max2);

// let num: number = 345;
// let res: number = 0;
// while (num > 0) {
//     res = res * 10 + (num % 10)
//     num = Math.floor(num / 10)
// }
// console.log(res);

// function fibo(num: number) {
//     if (num <= 1) {
//         return num
//     } else {
//         return fibo(num - 1) + fibo(num - 2)
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(fibo(i));

// }

// let num: number = 15;
// let firstNum: number = 0;
// let secondNum: number = 1;

// console.log(firstNum);
// console.log(secondNum);
// for (let i = 0; i <= num - 2; i++) {
//     let nextNum: number = firstNum + secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }

// let num: number = 15;
// let count: number = 0;

// for (let i = 2; i <= num; i++) {
//     count = 0
//     for (let j = 2; j <= num; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 1) {
//         console.log(i);
//     }
// }

// let a = '{}';
// if ('{' && '}') {
//     console.log();

// }

// setTimeout(() => {
//     // return ( ("12345"));
//     try {
//     } catch (error) {
//         throw Error("inside settimeout error")
//     }
// }, 1000);

// async function test(x) {
//     console.log("hello");
//      x()
// }

// test(function x() {
//     console.log("12345");
// })



// function greet() {
//     console.log("hello...,");

// }

// setTimeout(greet, 2000);

// setTimeout(() => {

// }, 2445);\


// function greet() {
//     console.log("hello...,");

// }
// // let greet = "vikas"
// setTimeout(greet, 2000);


// function test() {
//     var a = b = 1;
// }
// test()
// console.log(b);

// setTimeout(() => {
//     1
// }, 200);

// async function test() {
//     return new Promise((resolve,reject)=>{
//         reject(1)
//     }).then((data)=>{
//         console.log(data);

//     }).catch((err)=>{
//         console.log(err);
//     })
//     console.log(12457890);

// }
// test()

// let data = {
//     name: "vikas",
//     email: ["vikas@gmail.com"],
//     phone: "1234567890"
// }
// // console.log(data.email.length);

// for (let i = 0; i < data.email.length; i++) {
//     console.log(Object.keys(data.email[0]));
// }

