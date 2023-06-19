// const cluster = require('cluster');
// const process = require('process');
// const os = require('os');

// const numCPUs = os.cpus().length;

// function startCluster(serverCallback) {
//   if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);

//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//       cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal) => {
//       console.log(`worker ${worker.process.pid} died`);
//       cluster.fork();
//       console.log(`Worker ${process.pid} started`);
//     });
//   } else {
//     // Workers can share any TCP connection
//     // In this case it is an HTTP server
//     serverCallback();
//     console.log(`Worker ${process.pid} started`);
//   }
//   process.on('uncaughtException', (err) => {
//     console.log(`UncaughtException Erorr \n${err}`);
//     cluster.worker.kill();
//   });
//   process.on('unhandledRejection', (err) => {
//     console.log(`unhandledRejection Erorr \n${err}`);
//     cluster.worker.kill();
//   });
// }

// module.exports = startCluster;
const cluster = require('cluster');
const cpus = require('os').cpus().length;
if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }
    cluster.on('exit', function () {
        cluster.fork();
    })
}
else {
    require('./index')
}
console.log("cpus", cpus);