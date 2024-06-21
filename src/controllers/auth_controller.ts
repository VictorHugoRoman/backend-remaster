import { authRepository } from "src/repositories";
import { Request, Response } from 'express'
import { IUser } from "src/models/user_model";

export default class AuthController {
    private readonly _authRep: authRepository;
    
    constructor(authRep: authRepository ) {
        this._authRep = authRep;
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const  body = req.body as IUser; 
        const createdUser = await this._authRep.signUp(body);
        res.status(201).send(createdUser);
    }
    
    async signIn(req: Request, res: Response): Promise<void> {
        const { body } = req; 
        const creds = await this._authRep.signIn(body);
        res.send(creds);
    }
}