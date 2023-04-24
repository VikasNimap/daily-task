// console.log("hello");

// let data = [12, 34, 56, -78, 90, 31];
// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if (max1 < data[i]) {
//         max2 = max1;
//         max1 = data[i]
//     }
// }
// console.log(max2);

// let number = 123;
// let res = 0;
// while (number > 0) {
//     res = res * 10 + (number % 10)
//     number = Math.floor(number / 10)
// }
// console.log(res);

// let a = 6;
// let b = 12;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a is : ${a}\nb is : ${b}`);


// let str1 = 'vikas';
// let str2 = 'skivp';
// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return `length is not equal`;
//     }
//     else {
//         let str3 = str1.split('').sort();
//         let str4 = str2.split('').sort();
//         let s = str3.join('');
//         let ss = str4.join('');
//         if (s === ss) {
//             return `Anagram`;
//         }
//         else {
//             return `not anagram`;
//         }
//     }
// }
// console.log(anagram(str1, str2));


// let str = 'maurya';
// let res = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);

// let str = 'vikas maurya';
// let str1 = str.split(' ').reverse().join('');
// let str2 = str1.split(' ').reverse().join('');
// console.log(str2);

// let arr = [90, 89, 86, 85];
// let sort = arr.sort((a, b) => a - b);
// let max = Math.max(...sort);
// let min = Math.floor(...sort);
// function missing(min, max, sort) {
//     let data = [];
//     for (let i = min; i < max; i++) {
//         if (i < i + 1 && !sort.includes(i + 1)) {
//             data.push(i + 1)
//         }
//     }
//     console.log(data);
// }
// missing(min, max, sort);

// let str = '123BCD21';
// let res = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(str, res);
// if (res === str) {
//     console.log('palindrome');
// }
// else {
//     console.log('not palindrome');
// }

// function fibo(num) {
//     if (num <= 1) {
//         return num
//     }
//     return fibo(num - 1) + fibo(num - 2)
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(fibo(i));
// }


// let num = 10;
// let firstNum = 0;
// let secondNum = 1;
// console.log(Number(`${firstNum}\n${secondNum}`));
// for (let i = 0; i <= num - 2; i++) {
//     let nextNum = firstNum + secondNum
//     console.log(nextNum);
//     firstNum = secondNum;
//     secondNum = nextNum;
// }

// let data = [12, 45, 43, 76, 77, 89, 9, 0];
// for (let i = 0; i < data.length; i++) {
//     let even = data[i] % 2 == 0
//     console.log(even);
// }

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

// let a = 25;
// let res = a ** (1 / 2);
// console.log(res);

// let data = [12, 34, 67, 89, 12, 34,67];
// let arr = [];
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] === data[j] && !arr.includes(data[i])) {
//             arr.push(data[i])
//         }
//     }
// }
// console.log(arr);

// let data = [80, 60, 10, 50, 30, 100, 0, 50];
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] + data[j] === 100) {
//             console.log(data[i] + " " + data[j]);
//         }
//     }
// }{

// class List {
//     constructor(data, next) {
//         this.data = data;
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null;
//         this.tail = null
//     }
//     inserAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             list.next = this.head,
//                 this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             this.tail.next = list,
//                 this.tail = list
//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }

// }

// const node1 = new LinkedList();
// node1.inserAtBeginning(0);
// node1.insertAtEnd(1);
// node1.insertAtEnd(2);
// node1.insertAtEnd(3);
// node1.insertAtEnd(4);

// const node2 = new LinkedList();
// node2.inserAtBeginning(1);
// node2.insertAtEnd(2);
// node2.insertAtEnd(3);
// node2.insertAtEnd(4);

// for(let i = node1.head;i!=null;i=i.next){
//     for(let j = node2.head;j!=null;j=j.next){
//         if(i.data===j.data){
//             console.log(i.data);
//         }
//     }
// }

// const cron = require('node-cron');
// const moment = require('moment');

// cron.schedule('* * * * * *', async () => {
//     const cutoffDate = moment().subtract(72, 'hours').toDate();
//     try {
//       console.log("running every minute");
//     //   await db.story.deleteMany({ createdAt: { $lte: cutoffDate } });
//       console.log('Data deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   }, {
//     scheduled: true,
//     timezone: 'UTC'
//   });