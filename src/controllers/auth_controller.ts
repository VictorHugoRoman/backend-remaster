import { AuthRepository } from "src/repositories";
import { Response } from "express";
import { PBSignUp, RBCustom } from "./types";

export default class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  signUp = async (req: RBCustom<PBSignUp>, res: Response): Promise<void> => {
    const body = req.body;
    const createdUser = await this.authRepository.signUp(body);
    res.status(201).send(createdUser);
  };

  signIn = async (req: RBCustom<PBSignUp>, res: Response): Promise<void> => {
    const { body } = req;
    const creds = await this.authRepository.signIn(body);
    res.send(creds);
  };
}
