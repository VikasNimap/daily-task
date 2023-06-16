// let data: number[] = [12, 15, 11];
// let max = 0;
// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] > max) {
//             max = data[i]
//         }
//         if (data[i] > data[j]) {
//             let temp = data[i];
//             data[i] = data[j];
//             data[j] = temp
//         }
//     }
// }
// let arr: number[] = [];
// for (let i = data[0]; i < max; i++) {
//     if (!(arr.includes(i)) && !(data.includes(i))) {
//         arr.push(i);
//     }
// }
// console.log(arr);
// import express from 'express';
// import { Request, Response } from 'express-serve-static-core';

// const app = express();
// import {Router} from 'express';
// const ap = Router();
// ap.post('/api', controller);


// let db = {
//     name: 'vikas',
//     email: 'vikas@gmail.com',
//     password: 'vikas123'
// };

// async function controller(req: Request, res: Response) {
//     try {
//         let data = req.body;
//         const response = await services(data);
//         if (!response) {
//             res.send(response)
//         } else {
//             res.send(response)
//         }
//     } catch (error) {
//         res.send(error)
//     }
// }

// async function services(data: any) {
//     try {
//         const response = await db.name === data.name;
//         if (!response) {
//             throw new Error('Invalid credientials');
//         } else {
//             return response
//         }
//     } catch (error) {
//         return error
//     }
// }

// export { controller }


// app.listen(3000, () => {
//     console.log('Listening', 3000);
// })

// try {
//     throw new Error('INVALID ERROR')
//     try {
//         let a = 0;
//         if (a) {
//             console.log(a);
//         } else {
//             throw new Error('A is not true.')
//         }
//     } catch (error) {
//         // console.log(error,'----------->');
//         throw error
//     }
// } catch (error) {
//     console.log('inside error ====>',error);
// }

// var a
// = 40;

// let a = 5;
// let b = a
//     (() => {
//         console.log('inside ', a);
//     })()
// console.log(b);

// console.log(1);
// function test() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 0);
//     })
// }
// async function demo() {
//     let a = await test();
//     console.log(a);
//     console.log(3);
// }
// demo()


// let regex = /a/;
// let regex1 = /b/;

// let a = "Welcome to Programiz!";
// let b = "Welcome Programiz !to";
// let reg = a.regex()
// le