import { UserDocument } from "../models";
import BaseRepository from "./base_repository";
import { UserService } from "../services";
import { IUserRepository } from "./types";

class UserRepository extends BaseRepository<UserDocument> implements IUserRepository<UserDocument> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  async getByUserName(username: string): Promise<UserDocument | null> {
    return await this.userService.getByUserName(username);
  }
}

export { UserRepository };
