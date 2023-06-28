// console.log(12345);

// function test() {
//     return function temp() {
//         console.log('Vikas Maurya');
//     }

// }
// let res = test();
// res();

// function x(y: Function) {
//     console.log('x called');
//     y()
// }
// x(function y() {
//     console.log('y called');

// })

// let arr = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];

// let res = arr.filter(user => {
//     return user.age > 25
// }).map(ele => {
//     return ele.age.toString(2)
// })
// console.log(res);

// let num = 23;
// console.log(num.toString(2));

// let arr = [23, 34, 45, 678, 89];

// let res = arr.filter(num => num > 50);
// console.log(res);

// let arr = [1, 3, 6, 8, 0];
// let res = arr.reduce((total, i) => {
//     total += i
//     return total
// })
// console.log(res);

// let arr = [1, 3, 6, 8, 0];
// let res = arr.reduce((max, i) => {
//     if (i > max) {
//         max = i
//     }
//     return max
// });
// console.log(res);

// let arr = [11, 3, 6, 8];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);


// let arr = [11,
//     36, 6, 8];
// let res = arr.reduce((min, i) => {
//     if (i < min) {
//         min = i
//     }
//     return min
// }, arr[0]);
// console.log(res);



// let users = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];
// let output = users.filter(user => user.age > 25).map(user => user.name.toUpperCase());
// console.log(output);

// let users = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];

// let output = users.reduce((user, i) => {
//     if (i.age > 25) {
//         user++
//     }
//     return user
// }, 0)
// console.log(output);

// let users = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];

// let output = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age]++
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(output);

// let users = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];

// let output = users.filter(user => user.age < 30).map(user => user.name);
// console.log(output);


// let users = [
//     { name: 'Vikas', email: 'vikas@gmail.com', age: 22 },
//     { name: 'Satendra', email: 'satendra@gmail.com', age: 25 },
//     { name: 'Virendra', email: 'virendra@gmail.com', age: 27 },
//     { name: 'Akash', email: 'akash@gmail.com', age: 23 },
//     { name: 'Pranil', email: 'pranil@gmail.com', age: 27 },
//     { name: 'Shubham', email: 'shubham@gmail.com', age: 29 },
//     { name: 'Abhishek', email: 'abhishek@gmail.com', age: 32 },
// ];

// let output = users.reduce((acc: any, curr) => {
//     if (curr.age < 25) {
//         acc.push(curr.name);
//     }
//     return acc;
// }, [])
// console.log(output);


// let radius = [2, 4, 5, 7];

// function calculateArea(radius: number[]) {
//     let out: any = [];
//     for (let i = 0; i < radius.length; i++) {
//         out.push(Math.PI * (radius[i] * radius[i]));
//     }
//     return out;
// }
// console.log(calculateArea(radius));


// let radius = [2, 4, 5, 7];

// function calculateArea(radius): any {
//     return Math.PI * radius * radius
// }
// function calculate(calculateArea: Function) {
//     let out = [];
//     for (let i = 0; i < radius.length; i++) {
//         out.push(calculateArea(radius[i]));
//     }
// }



// let res = fetch('https://googlemaps.com/').then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message);
// })

// async function test() {
//     console.log('1');
    
// }
// test().then

