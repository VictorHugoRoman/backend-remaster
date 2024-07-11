import { IUser, UserDocument } from "../../models/user_model";
import { IBaseRepository } from "./base_repository_types";

export type ISignIn = {
  token: string;
  user: UserDocument;
};

export type IUserToEncode = {
  username: string;
  id: any;
};

export interface IUserRepository<T> extends IBaseRepository<T> {
  getByUserName(userName: string): Promise<UserDocument | null>;
}
