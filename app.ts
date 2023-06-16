import express from 'express';
import path from 'path';
const app = express();
import { route } from './routes/file';
app.use(express.json())


app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('Listening', 3000);
})