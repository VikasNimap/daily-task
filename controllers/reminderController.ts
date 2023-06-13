import user from '../model/userModel';


interface User {
    name: string,
    email: string,
    password: string
}
const createUser = async (req: any, res: any) => {
    try {
        const { name, email, password } = req.body as User;
        let data: object = { name, email, password };
        const response = await user.create(data);
        if (!response) {
            return res.status(400).send({ error: response })
        }
        res.status(201).send({ result: response })
    } catch (error) {
        res.status(500).send({ error: error })
    }

}
export default createUser
// module.exports = { createUser }