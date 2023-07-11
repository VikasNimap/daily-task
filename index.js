
// let arr1 = ['vikas', 'vishal', 'akash', 'virendra'];
// let p1 = new Promise(function (resolve, reject) {
//     let res = arr.map(function (name) {
//         if (name === 'akash') {
//             return name;
//         }

//     },[])
//     if (res) {
//         resolve(res)
//     } else {
//         reject(res);
//     }
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// })

// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let res = arr.filter(function (name) {
//     return name === 'akash';
// });
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


// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let element = 'VIKAS';
// let index = 1;
// for (let i = arr.length; i >= 0; i--) {
//     if (i >= index) {
//         arr[i + 1] = arr[i]
//     }
//     if (i == index) {
//         arr[i] = element
//     }
// }
// console.log(arr);

// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let index = 2;
// for (let i = index; i < arr.length; i++) {
//     arr[i] = arr[i + 1]
// }
// console.log(arr);

// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let arr2 = ['PANKAJ', 'JITESH', 'RAHUL'];
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr3[i] = arr[i]
// }
// for (let i = 0; i < arr2.length; i++) {
//     arr3[arr.length + i] = arr2[i]
// }
// console.log(arr3);


// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let arr2 = ['PANKAJ', 'JITESH', 'RAHUL'];
// let arr3 = [];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//     arr3.push(arr[i])
//     ++i;
// }
// i = 0;
// while (j < arr2.length) {
//     arr3[arr.length + i] = arr2[i]
//     j++;
//     ++i
// }
// console.log(arr3);


// let arr = [91, 12, 1, 34];
// let arr2 = [22, 21, 2];
// let arr3 = [];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//     arr3[i] = (arr[i])
//     i++;
// }
// i = 0;
// while (j < arr2.length) {
//     arr3[arr.length + i] = arr2[i]
//     j++;
//     i++;
// }
// console.log(arr3);

// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let arr2 = ['PANKAJ', 'JITESH', 'RAHUL'];
// // let i = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);


// let arr = ['vikas', 'vishal', 'akash', 'virendra'];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//     while (j < arr.length) {
//         j = i + 1;
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             // j++;
//         }
//     }
// }

// console.log(arr);


