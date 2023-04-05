// console.log(12345);

// let data = [44, 12, 34, -56, 1, -78, 90];

// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max1) {
//         max2 = max1
//         max1 = data[i]
//     }
// }
// console.log(max2);

// let data = [-90, 67, 55, 100, 5, 2, 10];
// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max1) {
//         max2 = max1
//         max1 = data[i]
//     }
// }
// console.log(max2);


// let num = 456;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + num % 10
//     num = Math.floor(num / 10)
// }
// console.log(res);


// let a  =10;
// let b = 12;
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b);


// let str1 = "vikas";
// let str2 = "akisv";
// function anagram(str1, str2) {
//     if (str1.length != str2.length) {
//         console.log("length is not equal.");
//     }
//     else {
//         let s1 = str1.split("").sort();
//         let s2 = str2.split("").sort();
//         let p1 = s1.join("");
//         let p2 = s2.join("");
//         if (p1 === p2) {
//             console.log("Anagram");
//         }
//         else {
//             console.log("Not Anagram");
//         }
//     }
// }
// anagram(str1, str2)


// let str = "ABCDE";
// let res = "";
// for (let i = str.length-1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);



// let arr = [12, 11, 14, 13, 16];
// let data = arr.sort((a, b) => a - b);
// function missing(data) {
//     let min = 11; let max = 16;
//     for (let i = min; i < max; i++) {
//         if (i < i + 1 && !data.includes(i + 1)) {
//             console.log(i + 1)
//         }
//     }
//     return null
// }
// missing(data)


// let str = "madam";
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// if (res === str) {
//     console.log("palindrome");
// }
// else {
//     console.log("not palindrome");
// }



// function fibo(num) {
//     if (num <= 1) {
//         return num
//     }
//     return fibo(num - 1) + fibo(num - 2)
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(fibo(i))
// }


// let num = 10;

// let firstNum = 0;
// let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for (let i = 0; i <= num - 2; i++) {
//     let nextNum = firstNum + secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }


// let data = [12, 34, 12, 34, 56, 78, 90, 34];
// let arr = [];
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] == data[j] && !arr.includes(data[i])) {
//             arr.push(data[i])
//         }
//     }
// }
// console.log(arr);


// class List {
//     constructor(data, next) {
//         this.data = data,
//             this.next = null
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null,
//             this.tail = null
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             this.next = this.head,
//                 this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data
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

// let node = new LinkedList();
// node.insertAtBeginning(9)
// node.insertAtEnd(8)
// node.insertAtEnd(7)
// node.insertAtEnd(6)
// node.insertAtEnd(5)
// node.insertAtEnd(4)
// // node.print()
// let node2 = new LinkedList();
// node2.insertAtEnd(11)
// node2.insertAtEnd(12)
// node2.insertAtEnd(13)
// node2.insertAtEnd(6)
// node2.insertAtEnd(7)
// node2.insertAtEnd(8)
// node2.insertAtEnd(9)
// // node2.print()
// for(let i = node.head;i!=null;i=i.next){
//     for(let j = node2.head;j!=null;j=j.next){
//         if(i.data==j.data){
//             console.log(i.data);
//         }
//     }
// }


