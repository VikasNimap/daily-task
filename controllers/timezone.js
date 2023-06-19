
const moment = require('moment-timezone');



exports.getTime = async (req, res) => {
    const { query } = req.query;
    let t1 = moment.tz(query).format('DD-MM-YYYY HH:MM:SS');
    res.send({ time: t1 })
}