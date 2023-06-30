// console.log('123445');

// function test() {
//     let a = 4;
//     console.log(a);
// }
// test();
// let arr = [1];
// let p1 = new Promise(function (resolve, reject) {
//     if (arr.length > 0) {
//         resolve(arr);
//     } else {
//         reject(new Error('Invalid Array'));
//     }
// })

// p1.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log('Finally it ran.');
// });

// const fs = require('fs');
// const path = require('path');
// // let dir = fs.readdirSync(__dirname,'utf-8');
// // let include = dir.includes('index.js');
// // console.log(include);
// let baseName = path.basename(__filename);
// let res = fs.readdirSync(__dirname).filter((dir) => {
//     dir.indexOf('.') === -1
//         && dir !== baseName
//         && dir.slice(-3) !== '.js'

// })
// console.log(res);
// const path = require('path');
// let baseName = path.basename(__filename);
// let arr = ['index.js', 'bulkuploads', 'user'];
// let res = arr.filter((file) => {
//    return  file.indexOf('.') === -1
//         && file !== baseName
//         && file.slice(-3) !== '.js';

// })
// console.log(res);


// const fs = require('fs');
// let rs = fs.createReadStream('../.gitignore','utf-8');
// rs.pipe('data', function (chunk) {
//     if (err) {
//         console.log(err);
//         return
//     } else {
//         console.log(chunk);
//     }
// });

const fs = require('fs');
const path = require('path');
let dir = __dirname + '/uploads';
if (!fs.existsSync(dir)) {
    fs.mkdir('./uploads', function () {
        console.log('uploads folder created');
    });
}
fs.copyFile('index.js','../index.ts',function (err){
    if(err){
        console.log(err);
        return 
    }
})


//===================================^^^^^^^^^^^^^^^^^^^=========================