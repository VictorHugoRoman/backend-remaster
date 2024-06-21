import { Model } from "mongoose";
import { ICRUDRepository as ICRUDrepository } from "src/common/types";
import { IUserSchema } from "src/models/user_model";

export interface IUserCustomRepository {
  getUserByUserName(userName: string): Promise<IUserSchema|null>;
}

export type IUserRepository = IUserCustomRepository & ICRUDrepository;