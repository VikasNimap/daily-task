// console.log(1000);

// let arr = [12, 34, 56, -78, 90];
// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (max1 < arr[i]) {
//         max2 = max1,
//             max1 = arr[i]
//     }
// }
// console.log(max2);


// let num = 542;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + (num % 10)
//     num = Math.floor(num / 10)
// }
// console.log(res);

// let a = 100;
// let b = 200;
// a = a + b
// b = a - b
// a = a - b
// console.log(a, b);


// let str = "vikas";
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);


// let data = [16, 14, 13, 12, 11];
// let sort = data.sort((a, b) => { return a - b });
// // for (let i = 0; i < data.length; i++) {
// //     for (let j = i + 1; j < data.length; j++) {
// //         if (data[i] > data[j]) {
// //             let temp = data[i];
// //             data[i] = data[j]
// //             data[j] = temp
// //         }
// //     }
// // }
// // console.log(data);
// let min = sort[0];
// let max = 16;
// function missing(sort, min, max) {
//     for (let i = min; i < max; i++) {
//         if (i < i + 1 && !sort.includes(i + 1)) {
//             console.log(i + 1)
//         }
//     }
//     return null
// }

// missing(sort, min, max)

// let str = "pineenip";
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }

// if (str === res) {
//     console.log("palindrome");
// }
// else {
//     console.log("not palindrome");
// }

// let num = 10;

// function fibo(num) {
//     if (num <= 1) {
//         return num
//     }
//     return fibo(num - 1) + fibo(num - 2)
// }
// for (let i = 0; i <= num; i++) {
//     console.log(fibo(i));
// }


