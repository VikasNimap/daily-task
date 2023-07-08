import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy } from 'passport-local';
class Signature {
    async signature(req: Request, res: Response) {
        passport.use(new Strategy(function (req.header) {
            jwt.sign({})
        }))
    }
}
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i / 1000);
}