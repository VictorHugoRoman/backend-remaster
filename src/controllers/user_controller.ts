import { Response } from 'express';
import { UserDocument } from 'src/models/user_model';
import { UserRepository } from 'src/repositories';

import BaseController from './base_controller';
import { PPGUBUN, RPCustom } from './types/index';

export class UserController extends BaseController<UserDocument> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  getUserByUserName = async (req: RPCustom<PPGUBUN>, res: Response): Promise<void> => {
    const { name } = req.params;
    const user = await this.userRepository.getByUserName(name);
    res.send(user);
  };
}
