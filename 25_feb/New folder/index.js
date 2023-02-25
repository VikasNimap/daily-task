// console.log("hello");
// let data = [80, 60, 10, 50, 30, 100, 0, 50];
// let newArr = [];
// for(let i = 0;i<data.length;i++){
//     for(let j = 1;j<i;j++){
//         if(data[i]+data[j]==100){
//             newArr.push(data[i],data[j])
//         }
//     }
// }console.log(newArr);

// let data = [1, 2, 3, 4, 1, 5, 2, 6, 7, 7, 8];//find all duplicate.
// let arr = []
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] == data[j]) {
//             arr.push(data[i])
//         }
//     }
// } console.log(arr);

// let data = [1, 2, 3, 4, 1, 5, 2, 6, 7, 7, 8];
// let newArr = [];
// let map = data.map((e)=>{if(e===e){newArr.push(e)}})
// console.log(map);

// let num = [50,47,2,3,4567,6543];
// let count = 0;
// let newArr = [];
// for(let i = 0;i<num.length;i++){
//     count = 0
//     for(let j  =i+1;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==1){
//         newArr.push(num[i])
//     }
// }console.log(newArr);

// let data = [12,23,21,56,77];
// for(let i = 0;i<data.length;i++){
//     if(data[i]%2==0)console.log(data[i]);
// }

// let str = "vikas";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res += str[i]
//     console.log(res);
// }

// console.log(1)

// // const wait = () => {
//    let p1= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(2)
//             resolve()
//         })
//     }).then(() => {
//         console.log("resolved");
//     }).catch((err) => {
//         console.log(`${err}`);
//     })
// // }
// let a = async () => {
//     await p1
// }
// a()
// console.log(3)
// console.log(1);
// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//             console.log(2);
//         }, 1000)
//     }).then(() => { }).catch((err) => { console.log(`${err}`); })
// }

// async function b() {
//     await a()
//     console.log(3);
// }
// b()

// alert("helolo") && alert(2)

