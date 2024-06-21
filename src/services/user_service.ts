import { Model } from "mongoose";
import { IUserSchema } from "../models/user_model";
import BaseService from "./base_service";

export default class UserService extends BaseService<IUserSchema> {
  private readonly _user: Model<IUserSchema>;
  
  constructor(UserSchema: Model<IUserSchema>) {
    super(UserSchema);
    this._user = UserSchema;
  }

  getUserByUserName(userName: string): Promise<IUserSchema | null> {
    const data = this._user.findOne({ name: userName }).exec();
    return data;
  }
}
