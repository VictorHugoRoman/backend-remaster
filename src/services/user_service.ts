import { UserDocument, UserModel } from "../models/user_model";
import BaseService from "./base_service";

export default class UserService extends BaseService {
  constructor(private readonly userModel: UserModel) {
    super(userModel);
  }

  async getUserByUserName(userName: string): Promise<UserDocument | null> {
    const data = await this.userModel.findOne<UserDocument>({ name: userName }).exec();
    return data;
  }
}
