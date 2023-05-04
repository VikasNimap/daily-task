// let data = [12, 35, 1, 10, 34, 1, 35];
// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if(data[i]>max1){
//         max2=max1
//         max1=data[i]
//     }else if (data[i] > max2 && data[i] < max1) {
//         max2 = data[i];
//     }
// }
// console.log(max2);

// let num = 123;
// let res = 0;
// while(num>0){
//     res = res*10 + num%10
//     num = Math.floor(num/10)
// }
// console.log(res);

// let a = 10;
// let b = 12;
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b);
let str = 'hello vikas';
let a = /vikas/;
// console.log(a);
// console.log(a.source);

let res = a.exec(str);
console.log(res);