// console.log(123);
// let str = 'Engineer';
// function freq() {
//     let word = str.toLowerCase();
//     let query = {};
//     for (let char of word) {
//         if (query[char]) {
//             query[char]++
//         } else {
//             query[char] = 1
//         }
//     }
//     let res = '';
//     for (let ch in query) {
//         res += ch + query[ch]
//     }
//     return res
// }
// console.log(freq())

// let arr = ['cat', 'act', 'pat', 'tap', 'eat', 'tac'];
// function anagram(arr) {
//     let query = {};
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i].split('').sort().join('');
//         if (query[word]) {
//             query[word].push(arr[i])
//         } else {
//             query[word] = [];
//             query[word].push(arr[i])
//         }
//     }
//     return Object.values(query)
// }
// console.log(anagram(arr))

// let getData = async (req, res) => {
//     return new Promise((resolve, reject) => {
//         reject(1)
//     }).then(() => {
//         return ('hello inside then');
//     }).catch((err) => {
//         return ({ error: true, message: 'in catch error', err })
//     })
// }

// let findData = async (req, res) => {
//     let result = await getData();
//     console.log(result)
// }
// findData()

// let arr = ['vikas', 'shiva', 'akash', 'aditya'];
// let res = arr.splice(0, 3);
// let res = arr.slice(2);
// console.log(res);
// console.log(arr);

class List {
    constructor(data, next) {
        this.data = data,
            this.next = null
    }
}

class LinkedList {
    constructor(data, next) {
        this.head = null,
            this.tail = null
    }
    insertAtBeginning(data) {
        const list = new list();
        list.data = data;
        if (!this.head) {
            this.head = list,
                this.tail = list
        } else {
            list.next = this.head,
                this.head = list
        }
    }
    insertAtEnd(data) {
        const list = new list();
        list.data = data;
        if (!this.head) {
            this.head = list,
                this.tail = list
        } else {
            this.tail.next = list,
                this.tail = list
        }
    }
}