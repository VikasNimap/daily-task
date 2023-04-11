const express = require('express');
const dotenv  = require('dotenv');
dotenv.config({ path: "./config.env" }); 

const path = require('path')

const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express();
const connectDB = require('./server/database/connection')
require('dotenv').config()

// dotenv.config({path:'config.env'})
const port = process.env.port || 8080;

// log request
app.use(morgan('tiny'));

//mogodb conections
connectDB()


// parse request to bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

// set view engine 
app.set("view engine",'ejs')

// load assets 
app.use('/css', express.static(path.join(__dirname,"assets/css"))) 
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.resolve(__dirname,"assets/img"))) 
app.use('/js', express.static(path.resolve(__dirname,"assets/js"))) 

// Route files are in router folder
// Load routers
app.use('/',require('./server/routes/router'))


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})













