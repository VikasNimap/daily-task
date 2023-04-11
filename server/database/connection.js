

const mongoose = require('mongoose')
const connectDB= async()=>{
    try{
        //MongoDB connection string
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useFindAndModify: false,
            // useCreateIndex: true
            
        })
        console.log(`MogoDB conected: ${con.connection.host}`);
    }catch(err){
        console.log(`${err}`);
        process.exit(1)
    }
}

module.exports= connectDB