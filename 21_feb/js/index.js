// console.log("hello");

// let data = [12, 34, 56, 77, 43, 21, 90];
// let evenArr = [];
// let oddArr = [];
// for (let i = 0; i < data.length; i++) {
//     if (i % 2 == 0 && data[i] % 2 == 0) {
//         evenArr.push(data[i])
//     }
//     if(i%2 !=0 && data[i]%2 !=0){
//         oddArr.push(data[i])
//     }
// }console.log(evenArr);
// console.log(oddArr);


// let str = "nimap";
// console.log(str.length);
// let counter = 5;
// let res = "";
// for(let i = counter;i<=str.length;i++){
//     if(str.length==counter){
//         res += str[i]
//         console.log(res);
//         break
//     }
// }
// res += str
// console.log(res);


// (function test(){
//     console.log("hello-world");
// })();

// let data = [200,34,67,89,106,60];
// let min = data[0];
// let min2 = data[1];
// for(let i = 0;i<data.length;i++){
//     if(data[i]<min){
//         min = data[i]
//     }

// }
// for(let i = 0;i<data.length;i++){
//     if(data[i]>min && data[i]<min2){
//         min2 = data[i]
//     }
// }
// console.log(min);
// console.log(min2);
// let a = 100;
// let b = 250;
// let c = 350;

// function test(a, b, c) {
//     if (a < b && a < c) {
//         console.log('a is min', a);
//     }
//     else if (b < a && b < c) {
//         console.log("b is min", b);
//     }
//     else if (c < a && c < b) {
//         console.log('c is min', c);
//     }
// }
// test(a,b,c)
let arr = [1,102,384,56,78,77,10];
let min1 = arr[0];
let min2;
for(let i = 0; i<arr.length; i++){
    if(arr[i]<min1){
        min2=min1;
        min1=arr[i];
    }
    else if(arr[i]!==min1 && arr[i]<min2){
        min2=arr[i]
    }
}
// let min = data[0];
// let min2 = data[1];
// for(let i = 0;i<data.length;i++){
//     if(data[i]<min){
//         min = data[i]
//     }
//      else if(data[i] !==min && data[i]<min2){
//         min2 = data[i]
//      }
     
// }
console.log(min1);
console.log(min2);