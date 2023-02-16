// let data = [23,56,90,21,12];
// let res = data.sort(function(a,b){return a-b})
// console.log(res);
// let data = [90, 67, 89, 54, 4512];
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         if (data[i] < data[j]) {
//             let temp = data[i]
//             data[i] = data[j]
//             data[j] = temp
//         }
//     }
// }console.log(data);

// let data = [90, 89, 88, 785, 634, 23, 21, 11];
// let res = 3;
// for (let i = res; i < data.length - 1; i++) {
//     data[i] = data[i + 1]
// } 
// data.length = data.length - 1
// console.log(data);

// let data = [12, 3, 4, 5, 6, 9];
// let position = 2;
// let newEl = 100;
// for (let i = data.length - 1; i >= position; i--) {
//     if (i >= position) {
//         data[i + 1] = data[i]
//     }
//     if (i == position) {
//         data[i] = newEl
//     }
// } console.log(data);

let data = [23, 6, 89, 12, 445, 56];
let min = data[0];
let secondMin = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i] < min) {
        min = data[i]
        console.log(min);
    }
   

}
console.log(secondMin);