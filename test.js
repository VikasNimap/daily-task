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
function printAll(a) {
    if (typeof a === "string") {
        for (var i = 0; i < a.length; i++) {
            console.log(a[i]);
        }
    }
    else if (typeof a === "object") {
        if (Array.isArray(a)) {
            for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                var str = a_1[_i];
                return a;
            }
        }
    }
    else {
        return "Argument is: ".concat(a);
    }
}
console.log(printAll("undefined"));
