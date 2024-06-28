import { AuthRepository } from "src/repositories";
import { Request, Response } from "express";
import { IUser } from "src/models/user_model";

export default class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  signUp = async (
    req: Request<any, any, IUser>,
    res: Response
  ): Promise<void> => {
    const body = req.body;
    const createdUser = await this.authRepository.signUp(body);
    res.status(201).send(createdUser);
  };

  signIn = async (
    req: Request<any, any, IUser>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const creds = await this.authRepository.signIn(body);
    res.send(creds);
  };
}
