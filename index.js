// const cluster = require('node:cluster');
// const http = require('node:http');
// const numCpus = require('node:os').availableParallelism();
// const process = require('node:process');

// if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);

//     for (let i = 0; i < numCpus; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', function (worker, code, signal) {
//         console.log(`worker ${worker.process.pid} died`);
//     })
// } else {

//     // Workers can share any TCP connection
//     // In this case it is an HTTP server
//     http.createServer((req, res) => {
//         res.writeHead(400);
//         res.end('hello world\n');
//     }).listen(8000);

//     console.log(`Worker ${process.pid} started`);

// }


// const worker = require('node:worker_threads');
// const {
//     Worker,
//     isMainThread,
//     setEnvironmentData,
//     getEnvironmentData,
// } = require('node:worker_threads');

// if (isMainThread) {
//     setEnvironmentData('Hello', 'Vikas!!');
//     const worker = new Worker(__filename);
// } else {
//     console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
// } 

