// const http = require('http');
// const fs = require('fs');
// const EventEmitter = require('events');
// const event = new EventEmitter();

// const server = http.createServer((req,res)=>{
//     if(req.url=='/'){

//         fs.readFile(`${__dirname}/api.json`,"utf8",(err,data)=>{
//             if(err){
//                 res.end(`${err}`)
//             }
//             else{
//                 const obj = JSON.parse(data);
//                 res.end(obj[0]["title"]);

//             }
//         });
//     }
// })

// server.listen(3000,()=>{
//     console.log(`listening`);
// })
// const server = http.createServer();
// server.on('request', (req, res) => {
    // fs.readFile('api.json', "utf-8", (err, data) => {
    //     if (err) {
    //         res.end(`${err}`);
    //     }
    //     else {
    //         res.end(data);
    //     }
    // })
    // const rstream = fs.createReadStream(`${__dirname}/api.json`,'utf-8',)
    // rstream.on('data',(chunkData)=>{
    //     console.log(`writing chunck`);
    //     res.write(chunkData);
    // })
    // rstream.on('end',()=>{
    //     console.log(`data reading`);
    //     res.end('end');
    // })
    // rstream.on('error',()=>{
    //     console.log("err occured");
    //     res.end('all read')
    // })
    // const rstream = fs.createReadStream(`${__dirname}/api.json`,'utf-8');
    // console.log(`reading`);
    // rstream.pipe(res);
// })

// event.emit('callMe')
// server.listen(3000, '127.0.0.1', () => {
//     console.log(`listening`);
// })