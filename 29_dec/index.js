// let num = 5;
// let sum = 1;
// let s = 1;
// for(let i = num;i>=1;i--){
//     if(i==0){
//         return 1
//     }
//     // s = s +i
//     sum =  i 
//     d = sum *(num-1)
// }
// console.log(d);

const { arrayBuffer } = require("stream/consumers");

// let n = 345;
// let res = "";
// while(n>0){
//     res += n%10
//     n = Math.floor(n/10)
// }
// console.log(res);

// let num = 5;
// let res = 1;
// for (let i = num; i >= 1; i--) {
//     res = res * i  // 1*5  4  3 2 1
// }
// // console.log(res);
// console.log(res);

// let data = [2,34,5,3,2,7,9,100];
// for(let i = 0;i<data.length;i++){
//     if(data[i]%2==0){
//         console.log(data[i]);
//     }
// }

// let n = 10;
// for(let i =2;i<=n;i++){
//     let res = 1;
//     if(i/1 && i/i){
//         console.log(res);
//         i++
//     }
// }
// let n = 100;
// let count = 0
// for(let i = 2;i<=n;i++){
//    for(let j =2;j<=i;j++){
//     if(i%j)
//     count ++
//    }
// }
// if(count==1){
//     console.log(j);
// }

// let num = 50;
// let count = 0;
// const newarr=[]
// for(let j=2;j<=num;j++){  //7
//     count=0
//     for(let i = 2;i<=j;i++){  //2
//         if(j%i==0){//6%2
//             count++  //3
//         }
//     }
//     if(count==1) newarr.push(j)     //2,3,5
// }

// console.log(newarr);


// let end = 100;
// let arr=[];
// let count = 0;
// for(let i=2;i<=end;i++){
//     count = 0
//     for(let j =2;j<=i;j++){
//         if(i%j==0){
//             count ++
//         }
//     }
//     if(count==1){
//         arr.push(i)
//     }
// }
// console.log(arr);

// let num = 100;
// let count = 0;
// let newarr = [];
// for (let i = 2; i <= num; i++) {    //7
//     count = 0
//     for (let j = 2; j <= i; j++) {    //7
//         if (i % j == 0) {        //7 % 7
//             count++       // 1
//         }
//     }
//     if (count == 1) {
//         newarr.push(i)  //2,3,5,7
//     }
// }
// console.log(newarr);

// let n = 5
// let res =1
// for (let i = n; i>=1; i--) {
//     res*=i
// }
// console.log(res);
// let name = "Vikash";
// let arr = []
// let a= arr.push(name);
// let b =arr.reverse(a)
// console.log(b);
let name = "Vikash";
let data = name.split('');
let res = ""
for (let i =data.length-1;i>=0; i--) {
    res += data[i]
}
console.log(res);















































































