// console.log(123456789);

// let a = 10;
// console.log(a);

// console.log(1);

// function temp() {
//     return new Promise((resolve, reject) => {
//         resolve(2);
//     })
// }

// async function test(cb) {
//     let b = await temp();
//     console.log(b);
//     console.log(3);
// }

// test(console.log);

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);



// console.log(1);

// function temp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2)
//         }, 3000);
//     })
// }
// temp().then((data) => {
//     console.log(data);
// }).then(() => {
//     console.log(3);
// }).catch((err) => {
//     console.log('in err', err.message);
// })


// let data = [12, 35, 1, 10, -34, 1, 35];
// let max1 = 0;
// let max2 = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max1) {
//         max2 = max1
//         max1 = data[i]
//     } else if (max1 > data[i] && max2 < data[i]) {
//         max2 = data[i]
//     }
// }
// console.log(max2);

// let num = 345;
// let res = 0;
// while (num > 0) {
//     res = res * 10 + num % 10
//     num = Math.floor(num/10)
// }
// console.log(res);

// let arr = [11, 16, 12, 19, 17];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// function missing(arr) {
//     let data = []
//     let min = arr[0];
//     let max = 0; {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) { max = arr[i] }
//         }
//         console.log(min, max);
//     }
//     for (let i = min; i < max; i++) {
//         if (!data.includes(i) && !arr.includes(i)) {
//             data.push(i)
//         }
//     }
//     return data
// }
// console.log(missing(arr))
// let num = 10;
// function recursion(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return recursion(num - 1) + recursion(num - 2)
// }

// for (let i = 0; i < num; i++) {
//     console.log(recursion(i));
// }

// let num = 10;
// let firstNum = 0;
// let secondNum = 1;
// console.log(firstNum);
// console.log(secondNum);
// for (let i = 0; i <= num-2; i++) {
//     let nextNum = firstNum + secondNum
//     console.log(nextNum);
//     firstNum = secondNum
//     secondNum = nextNum
// }

// let num = 10;
// let count = 0;
// for (let i = 2; i <= num; i++) {
//     count = 0;
//     for (let j = 2; j <= num; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 1) {
//         console.log(i);
//     }
// }


// let str = "Engineer";
// function freq(str) {
//     let data = {};
//     for (let char of str) {
//         if (data[char]) {
//             data[char]++
//         }
//         else {
//             data[char] = 1
//         }
//     }
//     let res = '';
//     for (let k in data) {
//         res += k + data[k]
//     }
//     return res
// }
// console.log(freq(str));

// let a = fetch

const getData = async () => {
    let temp = []
    const findData = await fetch('https://catfact.ninja/fact');
    console.log(findData);
    if (findData && findData.length) {
        for (let i of findData) {
            let resp = await fetch(`/v1/by-id/${i}`);
            if (resp) {
                temp.push(resp)
            } else {
                temp.push(null)
            }
        }
    } else {
        return `Error`
    }
    res.send(temp)
}
getData();