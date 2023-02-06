console.log("hello world");

// function transform(data){
//     return {
//         company_name: data["name"],
//         company_location: data["location"],
//         company_terms: data["term"],
//         company_estd: data["estd"]
//     }
// }
// let data = [
//     {
//         name: "Acme Ltd.",
//         location: "Thane",
//         term: 2,
//         estd: 2019
//     },
//     {
//         name: "Satendra Ltd.",
//         location: "Palghar",
//         term: 5,
//         estd: 2011
//     },
//     {
//         name: "Virendra Ltd.",
//         location: "GGGG",
//         term: 1,
//         estd: 2010
//     },
//     {
//         name: "Vikas Ltd",
//         location: "Navyug",
//         term: 6,
//         estd: 2000
//     }
// ];

// for(let i = 0;i<=data.length-1;i++){
//     let trans = transform(data[i])
//     console.log(trans);
// }


// function test(){
// }
// test()

// console.log(test);
// test()
// var test = ()=>{
// }
// function a(){
//     return 1
// }
// console.log(a())

///// 08:00 - 09:00 -- practising javascript array of objects to transform to resassign keys.
///// 09:00 - 10:00 -- practising basic js using var let and understanding error. and practising sorting of array.
///// 10:00 - 11:00 -- practising prime number from 1 to n.practising promises and settimeout function.
///// 11:00 - 12:00 -- solving and practising logical building for finding min and max of an array and second Max of an array.


// let data = [34, 56, 68, 990, 24];
// for (let i = 0; i < data.length; i++) {
//     if(data[i]==34){
//         console.log(i);
//     }
// }

// let data = [304, 56, 78, 90, 1];
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         if (data[i] < data[j]) {
//             let temp = data[i]
//             data[i] = data[j]
//             data[j] = temp
//         }
//     }
// }
// console.log(data);

// let num = 100;
// let arr = [];
// let count = 0;
// for (let i = 2; i <= num; i++) {
//     count = 0;
//     for(j = 2;j<=i;j++){
//         if(i%j==0){
//             count ++
//         }
//     }
//     if(count == 1)
//     arr.push(i)
// }
// console.log(arr);

// var test = async () => {
//     // console.log(1)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello");
//         }, 5000)
//         // console.log(3);
//     }).then((data) => { console.log(data) }).catch((er) => { console.log(`${err}`) })
// }
// // test()
// async function t() {
//     console.log(1);
//     await test()
//     console.log(3);
// }
// t()

// let a = () =>{

// // }
// async function x(y){
//     console.log("x");
//     console.log("hello");
//     await y()
// }
// x(function y(){
//     console.log("y");
// })

// let p1 = new Promise((resolve, reject) => {
//     let num = 10;
//     if(num>1){
//         resolve(num)
//     }
//     else{
//         reject()
//     }
// }).then((data)=>{ let a = data*2;
//     console.log(a)
// }).catch((err)=>{console.log(`${err}`)
// })


// let arr = [34,56,12,34,89,1];
// let min = arr[0];
// let max = 0;
// let max2 = 0;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]< max && arr[i]>max2){
//         max2 = arr[i]
//     }
// }
// console.log(min);
// console.log(max2);
// let num1 = 0
// let num = 10;
// function a(num) {
//     return new Promise ((resolve,reject)=>{
//         if(num>5){
//             resolve(num)
//         }
//         else{
//             reject("not found")
//         }
//     })
// }
// a(num).then((num)=>{ num1 = num * 5;console.log(num1);}).catch((err)=>{
//     console.log(`${err}`);
// })

// function b(num1){
//     return new Promise((resolve,reject)=>{
//         if(num1>num){
//             resolve(num1)
//         }
//         else{
//             reject("promise failed.")
//         }
//     })
// }
// b(num1).then((num1)=>{
//     let num2 = num1 + 30;
//     console.log(num2);
// }).catch((err)=>console.log(`${err}`))
let num = 10;
let p1 = new Promise((resolve,reject)=>{
    if(num>5){
        resolve(num);
    }
    else{
        reject("num is not greater thqn 5")
    }
}).then((num)=>{
    return p = num * 2
    console.log(p);
}).then((p)=>{
   let c1 =  p * 3
}).then((c1)=>{
    console.log(c1)
}).catch((err)=>{
    console.log(`${err}`);
})