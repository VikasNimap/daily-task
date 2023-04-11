const { request } = require('http')
var Userdb = require('../model/model')

//create and save new user
exports.create = async (req, res) => {
    //validate requests
    let a = req.body
    console.log(a, "=====");
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return
    }
    //new user
    const user = new Userdb({
        pId: req.body.pId,
        pname: req.body.pname,
        CategoryName: req.body.CategoryName,
        cId: req.body.cId,

    })

    // save user data ito DataBase
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')



        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            })
        })
}

// Retrieve and return all/single users
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                }
                else {
                    res.send(data)

                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })
    }
    Userdb.find()
        .then(user => {
            // res.status(user)
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while retriving user info."
            })
        })
}

// update new idetified user by userid

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" })
    }
    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
               return  res.status(404).send({ message: `canot update user with ${id}. Maybe user not found.` })
            }
            else {
               return  res.send(data)
            }
        })
        .catch(err => {
           return  res.status(500).send({ message: "Error user update info." })
        })
}

//delete a user with specified id
exports.delete = (req, res) => {
    const id = req.params.id
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `caot delete with id: ${id} Mybe id is wrong` })
            }
            else {
                res.send({

                    message: "user was deleted successfully."
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error could not delete user with id =" + id })
        })
}