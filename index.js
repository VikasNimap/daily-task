// const findMyState = () => {

// const { SimpleSubscription } = require("navi/dist/types/Observable");

//     const success = (position) => {
//         console.log(position);
//     }

//     const error = (position) => {
//         console.log(position);
//     }

//     navigator.geolocation.getCurrentPosition(success, error);
// }

// findMyState()

// let a = 10 - -10;
// console.log(a);

// console.log(Array.from('1234567890'));

// let data = { name: 'vikas' };
// console.log(delete data.name);
// console.log(data);

// let arr = ['vikas', 'vishal', 'amit'];
// [y,z] = arr;
// console.log(y,z);

// Promise.resolve(5).then(function (data){
//     console.log(data);
// })

// console.log(Promise.reject(5));
// let name = 'vikas';
// function test() {
//     console.log(name);
//     let name = 'shiva';
// }
// test()

// console.log(`${(x => x)('Hello')}, to vikas`);

//  false = 2
//  console.log(false);

// let data = { name: 'vikas' };
// Object.seal(data);
// data.name = 'vishal';
// console.log(data);

// let data = [12, 34, 56, 78];
// data.shift(0);
// console.log(data);

// let data = [12, 34, 56, 77];
// for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 == 0) {
//         console.log('even', data[i]);
//     }
//     if (data[i] % 2 != 0) {
//         console.log('odd', data[i]);

//     }
// }

// let data = [12, 34, 56, 77];

// let res = data.map(function (ele) {
//     if (ele % 2 == 0) {
//         return 'even';
//     }
//     if (ele % 2 !== 0) {
//         return 'odd';
//     }
// })
// console.log(res);

let data = [12, 34, 56, 77];
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        data[i] = 'even;'
    }
    if (data[i] % 2 !== 0) {
        data[i] = 'odd;'
    }
}
console.log(data);