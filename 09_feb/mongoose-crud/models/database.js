require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{
    
}).then(()=>{
    console.log(`connected successful...`);
}).catch((err)=>{
    console.log(`${err}`);
})