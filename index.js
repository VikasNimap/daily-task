// console.log(Math.floor(3.1));
// console.log(Math.floor(3.3));
// console.log(Math.floor(3.5));
// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.01));
// console.log(Math.round(3.91111));

// console.log(Math.sqrt(25));

// let num = 49;
// let res = num**(1/2);
// console.log(res);

// let num = 223;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + (num % 10);
//     num = Math.floor(num / 10);
// }

// console.log(res);

// let num = 223;
// let copy = 322;
// let res = 0;
// let flag = 0;
// for (let i = 0; i < num; i++) {
//     res = res * 10 + (num % 10);
//     num = Math.floor(num / 10);
//     ++flag
//     console.log(flag);
//     if (res === copy) {
//         console.log(res);
//         break
//     }
// }

// let arr = [12, 12, 12, 1, 2, 12, 12, 1, 2, 1, 2, 1, 2, 12, 34, 56, 78, 90, 12, 34, 12, 45, 54, 32, 5, 2, 5, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 121, 2];
// let data = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (!data.includes(arr[i])) {
//             data.push(arr[i])
//         }
//     }
// }
// console.log(data);


// let arr = [12, 34, 56, 78, 90, 12, 34, 12, 45, 54, 32, 5, 2, 5, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 121, 2];

// let res = arr.filter(function (ele, index) {
//     return arr.indexOf(ele) !== index && arr.lastIndexOf(ele) === index
// })
// console.log(res);\

// console.log(Math.ceil(3.00001));

// console.log(Math.min(12, 34, 12, 35, 6, 0));
// console.log(Math.max(12, 34, 12, 35, 6, 0));


// console.log(Math.log(2));

// console.log(Math.pow(2,3));

// console.log(3++'4');
// let a = 3;
// console.log((++a) + '4');

// let str = 'vikas';
// let str1 = 'kasiv';
// for (let i = 0; i < str.length - 1; i++) {
//     for (let j = i + 1; j < str.length - 1; j++) {

//     }
//     // console.log(str);
// }

// console.log(typeof("4" * "4"));
// console.log(typeof("4" + "4"));

// let data = [1, 3, 5, 9];
// let arr = [];
// let min = data[0];
// let max = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] < min) {
//         min = data[i]
//     }
//     if (data[i] > max) {
//         max = data[i]
//     }
// }

// for (let i = min; i < max; i++) {
//     if (!arr.includes(i) && !data.includes(i)) {
//         arr.push(i)
//     }
// }
// console.log(arr);

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
// let firstNum = 0; let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for (let i = 0; i <= num-2; i++) {
//     let nextNum = firstNum + secondNum;
//     console.log(nextNum);
//     firstNum = secondNum;
//     secondNum = nextNum
// }

// function fact(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return num * fact(num - 1)
// }
// console.log(fact(5));

// let num = 12;
// if (num < 1) {
//     console.log('Invalid number');
// }
// if (num == 1) {
//     console.log('1 is neither prime not composite');
// }
// let count = 0;
// for (let i = 2; i < num; i++) {
//     count = 0;
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 1) {
//         console.log(i);
//     }
// }

// let data = ["tan", "ant", "nat", "bat", "act", "cat", "tac"];

// let query = {};
// for (let i = 0; i < data.length; i++) {
//     let word = data[i].split("").sort().join("");
//     if (query[word]) {
//         query[word].push(data[i])
//     }
//     else {
//         query[word] = [];
//         query[word].push(data[i])
//     }
// }
// console.log(Object.values(query));

// let str = "Engineer";
// let word = str.toLowerCase();
// let query = {};
// for (let i = 0; i < word.length; i++) {
//     if (query[word[i]]) {
//         query[word[i]]++
//     } else {
//         query[word[i]] = 1
//     }
// }
// let res = "";
// for (let k in query) {
//     res += k + query[k]
// }
// console.log(res);


// class List {
//     constructor(data, next) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null;
//         this.tail = null;
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         } else {
//             list.next = this.head;
//             this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         } else {
//             this.tail.next = list;
//             this.tail = list;
//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtEnd(5);
// node.insertAtBeginning(9);
// node.insertAtEnd(8);
// node.print()


// class List {
//     constructor(data, next) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null;
//         this.tail = null;
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         } else {
//             list.next = this.head;
//             this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         }
//         else {
//             list.tail.next = list;
//             this.tail = list

//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtEnd(5);
// node.insertAtBeginning(2);
// node.print();

// class List {
//     constructor(data, next) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null;
//         this.tail = null;
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         } else {
//             list.next = this.head;
//             this.head = list;
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list;
//         } else {
//             this.tail.next = list;
//             this.tail = list;
//         }
//     }
// }

// (property) LinkedList.tail: List | null


