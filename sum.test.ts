import { describe, expect, test } from '@jest/globals';
// import { sum } from './index';
// import { data } from './index';
// import { str } from './index';
// import { data } from './index';
// import temp from './index';
// import data from './index';


// describe('sum module', () => {
//     test('adds 1 + 2 to equal 3', () => {
//         expect(sum(1, 2)).toBe(3);
//     });
// });


// describe('object validati0n', () => {
//     test('', () => {

//         expect(data).toBeGreaterThan(2)
//     })
// })

// describe('str does not contain I', () => {
//     test('should not contain I', () => {
//         expect(str).not.toMatch(/I/)
//     })
// })


// describe('str does not contain I', () => {
//     test('should  contain I', () => {
//         expect(str).toMatch(/ikas/i)
//     })
// })


// test('data array', () => {
//     expect(data).toContain('satendra')
// })

// test('data array', () => {
//     expect(new Set (data)).toContain('satendra')
// })


// test('promise', async () => {
//     expect(temp.temp()).resolves.toBe('vikas')
// })


let data = [12,45,78.6,89];
test('data', () => {
    for (let i = 0; i < data.length; i++) {     
    }
    expect(data).toEqual([12,45,78.6,89])
})