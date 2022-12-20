// let rows = 5;
// let str = "";
// for(let i =1;i<=rows;i++){
//     for(let j =1;j<=i;j++){
//         str+= "* "
//     }
//     str+= "\n";
// }
// for(let i =rows;i>=1;i--){
//     for(let j =1;j<=i;j++){
//         str+= "* "
//     }
//     str+= "\n";
// }
// console.log(str);
// let data = [55, 2, 44, 66, 7];
// for(let i =0;i<data.length;i++){
//     console.log(data[i]);
// }
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (data[i] < data[j]) {
//             let temp = data[i]
//             data[i] = data[j]
//             data[j] = temp
//         }
//     }
// }
// console.log(data);
// function factorial(num){
//     if(num==0){
//         return 1
//     }
//     return num *(factorial(num-1))
// }
// console.log(factorial(5));

// let data = [34,6,34,2];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){
//         max1 = data[i]
//     }
// }
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max2 && data[i]<max1){
//         max2 = data[i]
//     }
// }
// console.log(max2);

// let data = [33,4,66,7];
// let position = 1;
// let element = 100;
// for(let i = data.length-1;i>=1;i--){
//     if(i>=position){
//         data[i+1]=data[i]
//     }
//     if(i==position){
//         data[i]=element
//     }
// }
// console.log(data);
// let data = [3,55,44,34];
// let position = 2;
// for(let i = position;i<data.length;i++){
//     data[i]=data[i+1]
// }
// data.length = data.length-1
// console.log(data);
// let data = [34,55,66,76];
// let searchEl = 76;
// let newEl = ""
// for(let i = 0;i<data.length;i++){
//     if(data[i]===searchEl){
//         newEl +=i
//     }
// }
// console.log(newEl);
// let num1 = 10;
// let num2 = 12;
// num1 = num1+num2
// num2 = num1-num2
// num1 = num1-num2
// console.log(num1);
// console.log(num2);
// let str = "vikas"
// function palindrome(str){
//     let len = str.length;
//     for(let i = 0;i<=len/2;i++){
//         if(str[i]!=str[str.length-i-1]){
//             return `no palindrome`
//         }
//     }
//     return `palindrome`
// }
// console.log(palindrome(str));
// let str = "vikas";
// let len = str.length;
// for(let i = 0;i<len/2;i++){
//     let a = len-i-1
//     console.log(a);

// }

// var a = 10;
// {
//     let a = 30
// }


// let data = [34,53,53,5,3];
// const out = data.map((e)=>{
//     return e*2
// })
// console.log(out);

// let data = [23,56,6];
// let out = data.toString(data).search('3')
// console.log(out);
























