import { Request, Response } from "express";
import Authentication from "../utils/Authentication";

const db = require("../db/models")

class AuthControllers {
    register = async (req: Request, res: Response): Promise<Response> => {
        let {username, password } = req.body;
        const HashedPassword: string = await Authentication.PasswordHash(password);

        const createUser = await db.user.create({
            username,
            password: HashedPassword
        })
        return res.send("Registrasi Success");
    }
    login = async(req: Request, res: Response): Promise<Response> =>  {
        // cari data user by username
        let { username, password} = req.body;

        const user = await db.user.findOne({
            where: { username}
        })

        // check password
        // if( user){
            let compare = await Authentication.PasswordCheck(password, user.password);
            // return res.send(compare);
        // }

        //generate token
        if(compare) {
            let token = Authentication.GenerateToken(user.id, username, user.password);
            return res.send({token})
        }

        return res.send("AUTH FAIL");

    }
    
    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credentials)
    }
}

export default new AuthControllers();
