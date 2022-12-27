const jwt = require('jsonwebtoken');
const db = require('../models/index');

exports.middleWare = async (req, res, next) => {
  try {
    const token = req.headers.token;

    const decode = jwt.decode(token, "Vikash");
    console.log(decode);
    const data = await db.employees.findOne({ where: { email: decode } });

    if (!data) return res.send("enter valid token")
    console.log(data);
    if (req.params.id != data.id) {
      return res.send('user not found!!')
    }

    next()
  } catch (err) {
    res.send(err.message)
  }
}