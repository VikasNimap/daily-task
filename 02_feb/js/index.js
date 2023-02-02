// console.log("hello world");
// let data = [
//     {
//         user1: {
//             name: "Vikas",
//             surName: "Maurya",
//             gender: "Male"
//         },
//         user2: {
//             name: "Satendra",
//             surName: "Kushwaha",
//             gender: "Male"
//         },
//         user3: {
//             name: "Virendra",
//             surName: "Pathak",
//             gender: "Male"
//         },
//         user4: {
//             name: "Ayush",
//             surName: "Chaubey",
//             gender: "Male"
//         },
//         user5: {
//             name: "Ayush",
//             surName: "Chaubey",
//             gender: "Male"
//         },
//     }
// ]
// for (let i = 0; i < data.length; i++) {
//     p = (data[i])

//     function transform(p) {
//         return {
//             user_fName: p["user1"]["name"],
//             user_Lname: p["user1"]["surName"],
//             user_fName: p["user1"]["gender"],
//         }
//     }
//     console.log(transform(p));
// }


// let data = [23,45,67,24];
// for(let i = 0;i<data.length;i++){
//     console.log(data[i]);
// }

// let obj = {
//     name: "Vikas",
//     stack: "NodeJs"
// }
// let out = obj.stack;
// console.log(out);
// let output = obj["name"];
// console.log(output);

// let data = [
//     {
//         user1:{
//             fname: "Vikas",
//             lname: "Maurya"
//         }
//     }
// ]


// let data [12,35,56,78,654];
// let arr = [];
// for(let i = 0;i<data.length;i++){

// }

// let num = 20;
// for(let i = 1;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }

// let data = 19;
// for(let i = 1;i<=10;i++){
//     let c = data * i
//     console.log(`${data} * ${i} = ${c}`)
// }

// let num = 2;
// let arr = [];
// let arr1 = [];
// // for(let i = 0;i<=num+ 10;i++){
//     if(num%2==0){
//         arr.push(num+2,num+4,num+6)
//     }
//     else if(num%2){
//         arr1.push(num+2,num+4,num+6)
//     }
// // }
// console.log(arr);
// console.log(arr1);

// let data = 100;
// let arr = [];
// for(let i = 1;i<=data;i++){
//     if(i%2){
//         arr.push(i)
//     }
// }
// console.log(arr)
let out;
let data = [
    {
        name: "Vikas",
        age: 20,
        gender: "Male"
    },
    {
        name: "Satendra",
        age: 22,
        gender: "Male"
    },
    {
        name: "Vishal",
        age: 25,
        gender: "Male"
    }
]
for (let i = 0; i <= data.length - 1; i++) {
    let out = data[i]
    p = Object.assign(out)
}

