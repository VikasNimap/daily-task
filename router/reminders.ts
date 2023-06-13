import { Router } from 'express';
import controllers = require('../controllers/reminderController');
const router = Router();

interface User {
    name: string,
    email: string,
    password: string
}
router.post('/', controllers.createUser)
router.get('/', controllers.getUser)
router.put('/:id', controllers.updateUser);
// router.get('/', ((req, res) => {
//     res.send({ message: 'List of reminders.' })
// }))

export default router