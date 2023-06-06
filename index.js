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


