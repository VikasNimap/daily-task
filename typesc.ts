// let str: string = 'vikas';
// console.log(str);

// let str: string | number = "1234";
// console.log(str.toString());
// console.log(Number(str));
// type data = { name: string | number, age: string | number, tech: string | number }
// let data: data = {
//     name: 'vikas',
//     age: 21,
//     tech: 'node'
// }
// console.log(data.age);


// function test(num1: number, num2: number) {
//     return num1 + num2
// }
// console.log(test(2,5));


// function getData(name: string, year: Date) {
//     return `Hello, ${name} you are now ${year} years old`
// }
// console.log(getData('vikas', new Date()));

// function test(a) {
//     return a
// }
// let data = {
//     name: 'vikas',
//     age: 21
// }
// console.log(test(data));

function padLeft(padding: string | number, input: string) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input
    } else {
        return padding + input
    }
}