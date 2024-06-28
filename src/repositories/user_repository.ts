import { UserDocument } from "src/models/user_model";
import BaseRepository from "./base_repository";
import { UserService } from "../services/index";
import { IUserRepository } from "./types";

class UserRepository extends BaseRepository implements IUserRepository{
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  async getUserByUserName(userName: string): Promise<UserDocument | null> {
    return await this.userService.getUserByUserName(userName);
  }
}

export { UserRepository };
