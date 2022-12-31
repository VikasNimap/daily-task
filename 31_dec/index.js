// let n = 100;
// let count = 0;
// let arr = [];
// for(let i = 2;i<=n;i++){
//     count = 0
//     for(let j =2;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==1){
//         arr.push(i)
//     }
// }
// console.log(arr);

// let n =5;
// let res = 1;
// for(let i=n;i>=1;i--){
//     res = res * i
// }
// console.log(res);

// let data = [3,45,76,34,72,2,2];
// let max1 = 0;
// let max2 = 0;
// for(let i =0;i<data.length;i++){
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
// console.log(max1);
// let num = 567;
// let res = "";
// while(num>0){
//     res+=num%10
//     num = Math.floor(num/10)
// }
// console.log(Number(res));
// let string1="VIKAS";
// let string2="dAKIV";
// let s1 = string1.split('').sort().toString();
// let s2 = string2.split('').sort().toString();
// if(s1==s2){
//     return console.log("anagram");
// }
// else{
//     return console.log("not anagram");
// }
// console.log(s1);
// console.log(s2);

// let string1 = "VIKAS";
// let string2 = "KASIV";

// let string = "VIKAS";
// let s1 = string.split('').reverse().join('').toString();
// console.log(s1);
// let arr = [2, 4, 6, 61, 34];
// let min = 0;
// let s = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<min){
//         return min += arr[i]
//     }
// }
// console.log(min);
// let s = Math.max(34,56);
// console.log(s);

// let data = [2,4,6,8,9];
// let min = Math.min(...data);
// let max = Math.max(...data);
// let arr = [];
// for(let i = min;i<=max;i++){
//         arr.push(i)
// }
// console.log(arr);
// let n = 5;
// let res = 1;
// for(let i = n;i>=1;i--){
//     res*=i
// }
// console.log(res);

// let string = "vikav";
// let s = string.length;
// for (let i = 0; i <= s; i++) {
//     if()
// }

// let s1 = "madam";
// for(let i = 0;i<=s1.length;i++){
//     console.log(i);
// }
// function a(){
//     setTimeout(() => {
//        console.log(2); 
//     }, 2000);
// }
// let b =  async ()=>{
//     console.log(1);
//    await a()
//     console.log(3);
// }
// b()


// let a = ()=>{
//     return this
// }
// function b(){
//     return this
// }
// console.log(b())
// // console.log(a())
// function a(){
//     return this
// }
// console.log(a());

// let a = ()=>{
//     return this
// }
// console.log(this.a())
// function b(){
    
// }
// console.log(this.b);
// function a(){
    
// }
// console.log(a())
// function alert() { 
//     console.log(this.name + ' is calling'); 
//   }
//   alert()


// let obj = {
//     "a": 1,

// }
// let obj = {
//     a:1,
//     b:2,
//     func:  (()=>{
//         return this.a
//     })
// }
// let str = "vikas";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res = res + str[i]
// }
// if(str==res){
//     return console.log(' palindrome');
// }
// else{
//     return console.log('not palindrome');
// }

// let arr = req.body.a
// console.log(arr);

// let obj = {
//     a:1,
//     b:2,
//     func: ()=>{
//             return this.a + this.b
//         }
    
// }
// let c = obj.func()
// console.log(c);
// let arr= []
// let count = 0
// for(let i=100;i>=1;i--){
//     if(i%2!=0){
//         arr.push(i)
//         count++
//     }
// }
// console.log(arr);

// console.log(count);














