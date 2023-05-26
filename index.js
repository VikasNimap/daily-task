// // // console.log(1234567890);

// // let arr = undefined
// // function test() {
// //     return new Promise((resolve, reject) => {
// //         if (arr) {
// //             resolve(arr)
// //         } else {
// //             reject(new Error('arr is falsy', arr))
// //         }
// //     })
// // }
// // test().then(
// //     (arr) => {
// //         console.log('inside then', arr);
// //     })
// //     .catch(
// //         (err) => {
// //             console.log('inside catch', err.message);
// //         })

// // let a = 'vikas';
// // try {
// //     if (a) {
// //         console.log('inside if block', a);
// //         throw Error('ERROR')
// //     }
// //     else {
// //         console.log('inside else block ', a);
// //     }
// // } catch (error) {
// //     console.log('inside error', error);
// // }

// // let a = {}
// // let a = [/*null, undefined, 0, false, "vikas"*/];
// // for (let i = 0; i < a.length; i++) {
// // if (/*!a[i]*/a) {
// // console.log(a);
// // }
// // }

// // let a = [null, undefined, 0, false, "vikas"];
// // let filter = a.filter((e) => { return e })
// // console.log(filter);

// // let a = [1, 4, 6, "vikas", null];
// // for (let i = 0; i < a.length; i++) {
// //     if(a[i]){
// //         console.log(a[i],i);
// //     }
// // }


// console.log(1);


// function test() {
//     return new Promise((resolve, reject) => {
//         resolve(2)
//     })
// }
// async function temp() {
//     // console.log(1);

//     let a = await test();
//     console.log(a);
//     // console.log(a);
//     // a.then(()=>{
//     //     console.log(4)
//     // })

//     // console.log(3);

// }
// temp()
// // console.log(a);
// // setTimeout(() => {
// //     console.log(2);
// // }, 3000);

// // console.log(test())
// console.log(3);


// let a = [];
// if(a){
//     console.log('balle balle ');
// }
// else{
//     console.log('oh no!');
// }

// let a = {};
// if(a){
//     console.log('balle balle');
// }
// else{
//     console.log('oh no!');
// }

// let a = [];
// for (let i = 0; i < a.length; i++) {
//     if (a) {
//         console.log(a[i]);
//     }
// }

// console.log(a);
// var a;
// a = 10;

// for(let i = 0;i<=10;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
// }

// for (var i = 0; i <= 10; ++i) {
//     console.log(i);
// }

let a = 3;
let b = "3";
console.log(a-b);