import { IBaseRepository as IBaserepository } from "src/common/types";
import { UserDocument } from "src/models/user_model";

export interface IUserCustomRepository {
  getUserByUserName(userName: string): Promise<UserDocument|null>;
}

export type IUserRepository = IUserCustomRepository & IBaserepository;