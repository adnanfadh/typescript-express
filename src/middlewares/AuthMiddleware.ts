import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    // let auth = true

    // if(auth){
    //     next();
    // }
    // console.log("ini middleware")
    // return res.send("Tidak ada akses")

    if(!req.headers.authorization) {
        return res.status(401).send("Tidak ada Authentication")
    }

    let secretKey = process.env.JWT_SECRET_KEY || "secret"
    const token: string = req.headers.authorization.split(" ")[1];

    try{
        const credentials: string | object = jwt.verify(token, secretKey);

        if(credentials) {
            req.app.locals.credentials = credentials
            return next();
        }

        return res.send("token Invalid");
    } catch(error){
        return res.send(error)
    }
}