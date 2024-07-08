import { UserDocument, UserModel } from "../models/user_model";
import BaseService from "./base_service";

export default class UserService extends BaseService<UserDocument> {
  constructor(private readonly userModel: UserModel) {
    super(userModel);
  }

  async getByUserName(username: string): Promise<UserDocument | null> {
    const data = await this.userModel.findOne<UserDocument>({ username: username }).exec();
    return data;
  }
}
