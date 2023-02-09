const express = require('express');
const app = express();
const controllers = require('./controllers/sendMail');

app.get('/',(req,res)=>{
    res.send("hello from server.")
})
app.get('/sendmail',controllers.sendMail);

app.listen(3000,()=>{
    console.log(`listening`);
})