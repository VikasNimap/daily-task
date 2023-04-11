const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')
const axios = require('axios')


route.get('/',(req,res)=>{
    //make a get rewquset in /api/users
    axios.get('http://localhost:8080/api/users')
    .then (function(response){
        // res.send("crudApplication")
        res.render('index',{users: response.data})

    })
    .catch(err =>{
        res.send(err)
    })
})
route.get('/add-user',(req,res)=>{
    // res.send("crudApplication")
    res.render('add_user')
})
route.get('/update-user',(req,res)=>{
    axios.get('http://localhost:8080/api/users',{params: {id: req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user: userdata.data})
    })
    // res.send("crudApplication")
    .catch(err =>{
        res.send(err)
    })

})

//API 
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)


// const router = express.Router();
module.exports = route;