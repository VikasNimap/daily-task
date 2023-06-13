import express from 'express';
const app = express();
const PORT = 3000;
import db from './database/database'
import reminders from './router/reminders'

db()
app.use(express.json())
app.use('/api', reminders)

app.get('/', ((req, res) => {
    res.send({ message: 'Hello World' })
}))

app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
})