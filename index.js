// console.log(123456);
// let str = 'Engineer';

// function freq() {
//     let string = str.toLowerCase();
//     let query = {};
//     for (let i = 0; i < string.length; i++) {
//         if (query[string[i]]) {
//             query[string[i]]++
//         } else {
//             query[string[i]] = 1
//         }
//     }
//     let res = '';
//     for (let char in query) {
//         res += char + query[char]
//     }
//     console.log(res);
// }
// freq()

// let data = [09, 05, 03, 10];
// let sorted = data.sort((a, b) => { return a - b })
// let arr = [];
// let max = Math.max(...sorted);
// function missingEle() {
//     for (let i = sorted[0]; i < max; i++) {
//         if (!arr.includes(i) && !sorted.includes(i)) {
//             arr.push(i)
//         }
//     }
// }
// missingEle()
// console.log(arr);

// let num = 10;
// let res = '';
// for (let i = 0; i <= num; i++) {
//     if ((i % 2 == 0)) {
//     } else {
//         res += i
//     }
// }
// console.log(res);

// let arr = ['cat', 'bat', 'pet', 'tac', 'net', 'act', 'ten'];

// function anagramSort() {
//     let query = {};
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i].split("").sort().join("");
//         if (query[word]) {
//             query[word].push(arr[i])
//         } else {
//             query[word] = [];
//             query[word].push(arr[i])
//         }
//     }
//     return Object.values(query)
// }
// console.log(anagramSort())

// let a = 10;
// b = a
//     (() => {
//         console.log(a, 'inside a');
//     })()
// console.log(b, 'outside');
// let a = (()=>{
// console.log('hii');
// })
// let b = a(()=>{
// console.log('inside b');
// })()

// let arr = [1, 23, 4, 5, 'vikas'].reverse();
// let arr = [1, 23, 4, 5, 'vikas'];
// for (let i = arr.length-1; i >= 0; i--) {
//     let a = arr[i]
//     arr.push(a)
// }
// for (let i = 0; i < arr.length; i++) {
//     arr.shift(arr[i])
// }
// console.log(arr);

// let a
// let b = a(() => {
//     console.log('inside iffee');
// })()

// let a = 10;
// let b = a
//     (() => {
//         console.log(a, 'inside ');
//     })()
// console.log(b, 'outside');

// console.log(1);
// function test() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }
// async function temp() {
//     let a = await test()
//     console.log(a);
//     console.log(3);
// }
// temp()

// function fact(num) {
//     if (num <= 0) {
//         return 1
//     }
//     return num * fact(num - 1)
// }

// console.log(fact(6));

// function rec(num){
//     if(num<=1){
//         // return rec()
//     }
//     return num * rec(num-1)
// }
// console.log(rec(4));
// let res = 1;
// for(let i = 1;i<=6;i++){
//     res*=i
// }
// console.log(res);

// let data = [12, 34, 567, 8, 9];
// let a = data.map((e) => {
//     console.log(e);
// })

// data.forEach((e) => {
//     console.log(e);
// })

// const arr = [1,2,3,4,5,"vikas"]
// const l = arr.length

// for(let i = 0; i < l / 2; i++){
//     [arr[i], arr[l - i - 1]] = [arr[l - i - 1], arr[i]]
// }
// //[1,4]=[4,1]
// //[2,3]=[3,2]
// //[3,2]=[2,3]


// console.log(arr)




