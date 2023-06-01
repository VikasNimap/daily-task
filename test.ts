// let a:number = 10;
// console.log(a);


// function test(a: string | number, b: string): string {
//     return `${a}+${b}`
// }

// console.log(test("vikas", "akash"));

// function multiplyNums(a: number | string, b: number) {
//     if (typeof a === "number") {
//         return a * b
//     } else {
//         return a+b
//     }
// }

// console.log(multiplyNums("akash", 7));

// function printAll(a: string | string[] | object) {
//     if (typeof a === "string") {
//         for (let i = 0; i < a.length; i++) {
//             console.log(a[i]);
//         }
//     } else if (typeof a === "object") {
//         if (Array.isArray(a)) {
//             for (let str of a) {
//                 return a
//             }
//         }
//     }   else{
//         return `Argument is: ${a}`
//     }
// }

// console.log(printAll(undefined))


// function getOnlineUsers(num: number|string) {
//     if(num){
//         return `Total online users are ${num}`
//     }   else{
//         return `no one here...`
//     }
// }

// console.log(getOnlineUsers("5"));


// enum Role {
//     ADMIN, EDITOR,USER
// };
// console.log(Role.USER)

// let a: any = ['vikas', 12, 'vguhb'];
// console.log(a);

// function combine(a: string | number, b: string | number) {
//     if (typeof a === "string" && typeof b === "string"){
//         return a + b
//     }   else{
//         return a+b
//     }
// }
// console.log(combine(5,4));

//type-alias

// type dataType = string | number | boolean | undefined;
// let a: dataType = 300;
// let b: dataType = "300";
// let c: dataType = true;

function test(): number {
    return 200;
}
console.log(test());
