import { IUser, UserDocument } from "../../models/user_model";

export type ISignIn = {
  token: string;
  user: UserDocument;
}

export type IUserToEncode = {
  username: string;
  id: any;
}

export interface IUserRepository {
  getByUserName(userName: string): Promise<UserDocument|null>;
  getById(id: string): Promise<any>;
  getAllPaginate(pageSize: number, pageNum: number): Promise<any[]>;
  createEntity(entity: any): Promise<any>;
  updateEntity(id: string, entity: IUser): Promise<any>;
  deleteById(userName: string): Promise<boolean>;
}