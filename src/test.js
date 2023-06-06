// let age: number = 20;
// if (age > 50) {
//     age += 10;
// }
// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let numbers: number[] = [12, 34, 56, 78, 9];
// numbers.forEach((x)=>x.)
// const enum Size { small, medium, large };
// console.log(Size.small);
// function calculateTax(income: number, taxYear?: number) {
//     if ((taxYear || 2002) < 2022) {
//         return income * 1.2
//     }
//     return income * 1.3
// }
// calculateTax(10000)
// let employee: {
//     readonly id: number,
//     name?: string
// } = { id: 1 };
// employee.name = 'vikas';
// type Employee = {
//     id: number,
//     name: string,
//     DOB: string
// }
// let details: Employee = {
//     id: 1,
//     name: 'vikas',
//     DOB: '2023-06-01'
// };
// function kgToLbs(weight: number | string): number {
//     if (typeof weight === 'number') {
//         weight * 2.2
//     }
//     return parseInt(weight) * 2.2
// }
// type Employee = {
//     drag: () => void
// }
// type Students = {
//     resize: () => void
// }
// type UiWidget = Employee & Students
// let textBox: UiWidget = {
//     drag: () => { },
//     resize: () => { }
// }
// function greet(name: string) {
//     console.log(name.toUpperCase());
// }
// greet('vikas')
// function greet(name: string | null) {
//     if (!name) {
//         console.log('Hola!');
//     } else {
//         console.log(name.toUpperCase());
//     }
// }
// greet(null)
var a = (function (name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log(name);
    }
});
a('undefined');
