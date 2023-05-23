// console.log(1234567890);

// let arr = [12,"vikas","12345"];
// let data = {};
// data["file"] = [...arr];
// console.log(data);

// let arr = ["cat", "bat", "ate", "eat", "tea", "tab"];
// function anagram(arr) {
//     let query = {};
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i].split("").sort().join(""); // cat = ['c','a','t']
//         if (query[word]) {
//             query[word].push(arr[i])
//         }
//         else {
//             query[word] = []
//             console.log(query);
//             query[word].push(arr[i])
//         }
//     }
//     return Object.values(query)
// }
// console.log(anagram(arr));

// let arr = ["cat","act"];
// let a = {};
// let word = arr[0].split("").sort().join("");
// a[word] = arr[0]
// console.log(a);
// a["word"] = arr[1];
// console.log(a);

let str1 = 'madam';
let str2 = 'madam';
let arr = [];
let arr1 = [];
let res = [];
function anagram(str1, str2) {
    if (str1.length != str2.length) {
        return `not anagram since length is not equal.`
    }
    for (let i = 0; i < str1.length; i++) {
        arr[i] = (str1[i])
    }
    for (let i = 0; i < str2.length; i++) {
        arr1[i] = (str2[i])
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }

    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                let temp = arr1[i]
                arr1[i] = arr1[j]
                arr1[j] = temp
            }
        }

    }
    // return {arr,arr1};
    let data = {};
    data["arr"] = arr
    data["arr1"] = arr1
    // return data
    for (let i = 0; i < data["arr"].length; i++) {
        for (let j = 0; j < data["arr1"].length; j++) {
            if (data["arr"][i] === data["arr1"][i]) {
                let d = data["arr"][i];
                res.push(d)
              
            }
        }
    }
    // let s1 = str1.split("").sort().join("");
    // let s2 = str2.split("").sort().join("");
    // if (s1 === s2) {
    //     return `Anagram`
    // }
    // else {
    //     return `Not Anagram.`
    // }
    return(res);
}
console.log(anagram(str1, str2));