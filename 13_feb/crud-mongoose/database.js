const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
console.log(`connecting`);
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('connected--mongodb://127.0.0.1:27017/flipkart');}).catch((err)=>console.log(`${err}`));