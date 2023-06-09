// exports.sum = ((a, b) => {
//     return a + b
// })


// exports.subtract = ((c, d) => {
//     return c - d
// })

// function sum(a, b) {
//     return a + b
// }


// // let data = { one: 1 };
// let data = 3;

// module.exports = { sum, data };

// let str = 'vIkas';

// let data = [1,'vikas','milk',2,'satendra',4];


// let str = 'vikas';
// exports.temp = () => {
//     return new Promise((a, b) => {
//         if (str === 'vikas') {
//             a(str)
//         } else {
//             b(new Error('Invalid String'))
//         }
//     })
// }

// module.exports = { test };


// let data = [12, 34, 56, 78, 12, 34];
// let arr = [];
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (!arr.includes(data[i]) && data[i] === data[j]) {
//             arr.push(data[i])
//         }
//     }
// }
// console.log(arr);

// const a = 'Transter';
//   let string = '';
//   const map = new Map()
//   for(let i = 0; i < a.length; i++) {
//     let char = a.charAt(i).toLowerCase();
//     if(map.has(char)) {
//         console.log(map.get(char));
//         map.set(char,map.get(char) + 1);
//     } else {
//         map.set(char, 1);
//     }
// }console.log(map);

// for(let i = 0; i < a.length; i++) {
//     let char = a.charAt(i).toLowerCase();
//     const count = map.get(char);
//     if (count > 0) {
//         string += a[i] + count;
//         map.set(char, 0); 
//     }
// }
// console.log(string);
// console.log(map.get(char));


// for (var i = 0; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }



// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let op = strs.reduce((acc, i) => {
//     const temp = i.split("").sort().join("")
//     if (acc[temp]) {
//         acc[temp].push(i)
//     } else {
//         acc[temp] = [i]
//     }
//     return acc
// }, {})

// console.log(Object.values(op))

// let str1 = 'madam';
// let str2 = 'madam';
// function anagram() {
//     if (str1.length != str2.length) {
//         return 'not anagram';
//     }
//     let s1 = str1.split().sort().join("");
//     let s2 = str2.split().sort().join("");
//     if (s1 === s2) {
//         return 'Anagram';
//     }
//     return 'Not Anagram'
// }
// console.log(anagram());


exports.data = [12, 34, 45, 67, 78, .9];
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}