// const cluster = require('./cluster');

function fibonacci(n) {
    n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2)
}

const doFib = (iterations) => new Promise((resolve, reject) => {
    const start = Date.now();
    const result = fibonacci(iterations);
    console.log(`doFib is done in: ${Date.now() - start}ms`);
    resolve(result)
})

const main = async () => {
    try {
        const start = Date.now();
        const values = await Promise.all([
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40)
        ])

        console.log(`Values: ${values}`);
        console.log(`All done in ${Date.now() - start}`);
    } catch (error) {
        console.log(error);
    }
}
main()
    // cluster.call(main)