// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// let obj = {
//     name: "Vikas",
//     stack: "NodeJs",
//     data:{
//         phone:'1234567890',
//         home:'qwer',
//         image:{
//             link: "www.google.com/v2",
//             type: "file"
//         }
//     }
// };
// console.log(obj["data"]["image"]["link"])


// let data = [12, 35, 1, 10, 34, 1, 35];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){
//         max2 = max1
//         max1 = data[i]
//     }
//     else if (max2<data[i]&&max1>data[i]){
//         max2 = data[i]
//     }
// }


// console.log(max2)

let str1 = 'vikas';
let str2 = 'kasvi';
function anagram(str1,str2){
    if(str1.length != str2.length){
        return 'not anagram'
    }
    let s1 = str1.split('').sort();
    let s2 = str2.split('').sort();
    let s3 = s1.join('');
    let s4 = s2.join('');
    if(s3===s4){
        return 'anagram'
    }
    else{
        return 'not an anagram'
    }
}
console.log(anagram(str1,str2))










