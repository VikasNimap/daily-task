// 1) secondMax
// let data =  [12, 35, 1, 10, 34, 1, 35];
// let max = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max){
//         max = data[i]
//     }
// }
// for(let i = 0;i<data.length;i++){
//     if(data[i]<max && data[i]>max2){
//         max2 = data[i]
//     }
// }console.log(max2);

// 2) reversing integer
// let num = 123;
// let res = "";
// while(num>0){
//     res += num%10
//     num = Math.floor(num/10)
// }console.log(Number (res));

// 3) swapping 
// let a = 10;
// let b = 12;
// a = a + b
// b = a - b
// a = a - b
// console.log("A is",a);
// console.log("B is",b);

// 4) Anagram
// let str = "abcsrt";
// let str2 = "tabcs";
// let res = "";
// let count = 0;
// if (str.length != str2.length) {
//     console.log(`length is not equal`)
// }
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0;j<=str2.length-1;j++){
//         if(str[i]==str2[j]){
//             count++
//         }
//         if(count==1){
//             res+=str[i]
//             count = 0
//         }
//         if(count>1){
//             count = 1
//             res += str[i]
//             count = 0
//         }
//     }
// }
// if((str.length == res.length)&& str==res){
//     console.log(`Given strings are anagram`);
// }
// else{
//     console.log(`Strings are not anagram.`);
// }

// 5) reverse of a string
// let str = "ABCDE";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res += str[i]
// }console.log(res);

// 6) missing elements of array
// let arr = [1,2,3,5];
// let total = ((arr.length+1)*(arr.length+2))/2
// for(let i=0;i<arr.length;i++){
//     total=total-arr[i]   // 15  14  12  9  4
// }
// console.log(total);

// 7) palindrome
// let str = "madam";
// let res = "";
// for(let i = str.length-1;i>=0;i--){
//     res += str[i]
// }
// if(str ===res){
//     console.log(`Palindrome`);
// }
// else{
//     console.log(`Not palindrome`);
// }

// 8) fibonacci with recursion
// function fibonacci(num) {
//     if (num <= 1) {
//         return num
//     }
//     else {
//         return fibonacci(num - 1) + fibonacci(num - 2)

//     }
// }
// for(let i = 0;i<=5;i++){

//     console.log(fibonacci(i))
// }

// 9) fibonacci without recursion
// let num = 10;
// let firstNum = 0;
// let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for(let i = 0;i<num-1;i++){
//     let nextNum = firstNum + secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }

// 10) even number in list
// let data = [12,34,54,23,0];
// for(let i = 0;i<data.length;i++){
//     if(data[i]%2==0){
//         console.log(data[i]);
//     }
// }

// 11) prime number
// let num = 10;
// let count = 0;
// for (let i = 2; i <= num; i++) {
//     count = 0
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 1) {
//         console.log(i);
//     }
// }

// 12) square root of given number
// let num = 49;
// let res = num**(1/2);
// console.log(res);

// 13) duplicate logic 
// let data = [1,4,5,3,1,6,9,4];
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1 ;j<data.length;j++){
//         if(data[i]==data[j]){
//             console.log(data[i]);
//         }
//     }
// }

// 14) pairs whose sum = 100
// let data = [80, 60, 10, 50, 30, 100, 0, 50];
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<data.length;j++){
//         if(data[i]+data[j]==100){
//             console.log(data[i],data[j]);
//         }
//     }
// }

// 15) linked list question
class List{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }
    appendNode(nodeData){
        let newNode = {
            value:nodeData,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.size += 1
    }
}
let list = new List(200)
list.appendNode(300)
list.appendNode(400)
console.log(list);