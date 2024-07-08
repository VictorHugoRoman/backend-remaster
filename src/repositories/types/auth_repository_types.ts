import { ISignIn } from ".";
import { IUser, UserDocument } from "../../models/user_model";

export interface IAuthRepository {
  signUp(user: IUser): Promise<UserDocument | null>;
  signIn(user: IUser): Promise<ISignIn>;
}
