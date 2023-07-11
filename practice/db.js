const { Client } = require('pg')
exports.client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'flipkart',
  password: '#',
  port: 5432,
})
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });