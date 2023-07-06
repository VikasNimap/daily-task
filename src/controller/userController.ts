import { User } from '../models/user.entity';
import { AppDataSource } from '../app';
async function createUser() {
    const user = new User();
    user.name = 'Vikas';
    await AppDataSource.manager.save(user);
}