// let num = 10;
// let p1 = new Promise((reslove,reject)=>{
//     if(num<5){
//         reslove(num)
//     }
//     else{
//         reject( new Error("err"))
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// })
// let num = 10;
// let p1 = new Promise((resolve,reject)=>{
//     if(num<5){
//         resolve(num);
//     }
//     else{
//         reject(new Error('promise rejected'))
//     }
// }).then((data)=>{
//     return data * 5
// }).then((a)=>{
//    return a * 5
// }).then((b)=>{
//     console.log(b);
// }).catch((err)=>{
//     console.log(err.message);
// })
// let num = 10;
// function a(num){
//     if(num<5){
//         console.log(false);
//     }
//     else{  
//         cb(num)
//     }
// }
// function cb(num){
//     if(num>5){
//         let sum = num + num;
//         console.log(sum);
//     }
//     else{
//         return 'callback false';
//     }
// }
// a(num)
// let n = "vikas";
// function greet(msg,cb){
//     console.log(`${msg} ${na}`);
//     name(n)
// }
// function name(na){
//     return na
// }
// greet("hello",name)
// function talk(fx){
//     console.log('hiii');
//     fx();
//     console.log('aftr cb');
// }
// function sayhi(){
//     console.log("hello");
// }
// talk(sayhi)


// function x(y){
//     console.log('x');
//     y()
// }
// x(function y(){
//     console.log('y');
// })

// function x(y){
// console.log('hi');
// y();
// for(let i = 0;i<1000;i++){
//     console.log(i);
// }

// }
// function y(){
//     console.log("cb");
// }
// x()

// let rows = 5;
// let str=""
// for(let i=0;i<5;i++ ){
//     str+="*"
//     console.log(str)
// }

// console.log("*"+"*");


// let rows = 5;
// let str = "";
// for(let i =1;i<=rows;i++){
//     for(let j =1;j<=i;j++){
//         if(i==1 || i==rows){
//             str += "*"
//         }
//         else{
//             if(i==1||i==5){
//                 str += "*"
//             }
//             else{
//                 str+= " "
//             }
//         }
//     }
//     str+="\n";
//     console.log(str);
// }

