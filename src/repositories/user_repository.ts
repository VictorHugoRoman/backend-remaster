import { IUserSchema } from "src/models/user_model";
import { IUserRepository } from "./types";
import BaseRepository from "./base_repository";
import { userService } from "../services/index";

export default class UserRepository extends BaseRepository<IUserSchema> implements IUserRepository{
  private readonly us: userService;

  constructor(service: userService) {
    super(service);
    this.us = service;
  }

  async getUserByUserName(userName: string): Promise<IUserSchema|null> {
    return await this.us.getUserByUserName(userName);
  }
}
