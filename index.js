// console.log('hello from vikas');
// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function anagram(arr) {
//     let query = {};
//     for (let i of arr) {
//         let word = i.split("").sort().join();
//         if (query[word]) {
//             query[word].push(i)
//         }
//         else {
//             query[word] = [];
//             query[word].push(i);
//         }
//     }
//     return Object.values(query)
// }
// console.log(anagram(arr));

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function anagram(arr) {
//     let query = {};
//     for (let i of arr) {
//         let word = i.split("").sort().join("");
//         if (query[word]) {
//             query[word].push(i)
//         }
//         else {
//             query[word] = [];
//             query[word].push(i);
//         }
//     }
//     return Object.values(query);
// }
// console.log(anagram(arr))

// let word = 'Engineer';
// function frequency(word) {
//     let query = {};
//     for (let char of word) {
//         if (query[char]) {
//             query[char]++
//         } else {
//             query[char] = 1
//         }
//     }
//     let res = '';
//     for (let k in query) {
//         res += k + query[k]
//     }
//     return res
// }
// console.log(frequency(word));

// let car = {
//     name: 'Fiat',
//     model: '500',
//     engine: '500cc',
//     price: '900000',
//     function: function hello() {
//         return `Hello, ${this.name} your engine is ${this.engine}`
//     },
//     stock: ["a", "b", "c"],
// }
// // console.log(car.function());
// console.log(car.stock[1]);
// for (let i in car.stock) {
//     console.log(car.stock[i]);
// }

// console.log(3++'vikas');
// let regex = /vikas/g
// let str = 'vikas hello vikas is';
// console.log(str.replace(regex,'Akash'));

// let regex = /vikas/g;
// let str = 'vikas maurya vikshal hello vikas';
// console.log(str.match(regex));

// let regex = /\d[a-z]ikas/g;
// let str = '1ikas 7cpas vishak3s';
// console.log(str.match(regex));

// let reg = /vikas/gi;
// let str = 'vikas hello VIKAS ';
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));

// let a = false;
// let num = 10;
// let i = 0;
// while(num){
//     console.log(a);
//     --num
//     console.log(i++);
// }

// let reg = /vikas/gi;
// let str = 'hello from vikas';
// let res = reg.exec(str);
// console.log(res.index);
// console.log(res.input);

// let reg = /vikas/g;
// let str = 'hello from vIkAs';
// console.log(reg.test(str));

// let reg = /vikas/g;
// let str = 'hello from vIkAs';
// console.log(str.match(reg));

// let reg = /maurya   /gi;
// let str = 'hello and welcome vikas';
// console.log(str.search(reg));

// let reg = /vikas/gi;
// let str = 'hello vikas and welcome vIkAs';
// console.log(str.replace(reg,'sHuBhAm'));

// let reg = /^h[v]llo/i;
// let str = 'Hello and welcome';
// console.log(reg.exec(str));


// let reg = /g[ou]od/i;
// let str = 'guod morning vikas';
// console.log(reg.exec(str));

// let reg = /bye$/;
// let str = 'hello and bye';
// console.log(reg.exec(str));

// let reg = /ball$/i;
// let str = 'cat is playing with the ball';
// console.log(reg.exec(str));

// let reg = /.$/ig;
// let str = 'alliance is the option left for Aisa.';
// console.log(reg.exec(str));

// let reg = /vikas{2}/;
// let str = 'vikas vikas and bye';
// console.log(reg.exec(str));

