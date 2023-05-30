// console.log('hi vikash');

// let str = 'Philipiness';
// function frequency() {
//     let words = str.toLowerCase();
//     let query = {};
//     for (let char of words) {
//         if (query[char]) {
//             query[char]++
//         } else {
//             query[char] = 1
//         }
//     }
//     let res = '';
//     for (let k in query) {
//         res += k = k + query[k]
//     }
//     return res
// }

// console.log(frequency());


/*
philipiness
p
*/

// let str = 'Philipiness';
// function freq() {
//     let word = str.toLowerCase();
//     let query = {};
//     for (let i = 0; i < word.length; i++) {
//         if (query[word[i]]) {
//             query[word[i]]++
//         } else {
//             query[word[i]] = 1
//         }
//     }
//     let res = '';
//     for (let k in query) {
//         res += k + query[k]
//     }
//     return res
// }
// console.log(freq());


// let arr = ['bat', 'cat', 'atb', 'tac', 'abt', 'act', 'tic'];
// function anagram() {
//     let query = {};
//     for (let i = 0; i < arr.length; i++) {
//         let words = arr[i].split("").sort().join("");
//         if (query[words]) {
//             query[words].push(arr[i])
//         } else {
//             query[words] = []
//             query[words].push(arr[i])
//         }
//     }
//     return Object.values(query)
// }
// console.log(anagram());

