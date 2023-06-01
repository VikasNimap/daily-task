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

function printAll(a: string | string[] | object) {
    if (typeof a === "string") {
        for (let i = 0; i < a.length; i++) {
            console.log(a[i]);
        }
    } else if (typeof a === "object") {
        if (Array.isArray(a)) {
            for (let str of a) {
                return a
            }
        }
    }   else{
        return `Argument is: ${a}`
    }
}

console.log(printAll("undefined"))
