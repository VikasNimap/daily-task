const db = require('../models/index');
const courses = db.courses;
const redis = require('redis');

const client = redis.createClient()
client.on('err',function(err){
    console.log(`err ${err}`);
})
client.on("connnect",function(err){
    console.log(`conned redis`);
})


// exports.createCourse = async(req,res)=>{
//     const data = req.body;
//     const response = await courses.bulkCreate(data);
//     res.send({result:response});
// }
exports.getCourse = async (req, res) => {
    await client.connect()
    const response = await courses.findAll();
    const a = await client.setEx('postData', 60, response)
    res.send({ result: a });
}
exports.redis_post = async (req, res, next) => {
    await client.get('postData', (err, redis_data) => {
        if (err) {
            console.log(`err`);
        }
        else if (redis_data) {
            res.send(JSON.parse(redis_data))
            next()
        }
        else {
        }
    })
}