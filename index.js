// console.log(1234567890);

let arr = undefined
function test() {
    return new Promise((resolve, reject) => {
        if (arr) {
            resolve(arr)
        } else {
            reject(new Error('arr is falsy', arr))
        }
    })
}
test().then(
    (arr) => {
        console.log('inside then', arr);
    })
    .catch(
        (err) => {
            console.log('inside catch', err.message);
        })