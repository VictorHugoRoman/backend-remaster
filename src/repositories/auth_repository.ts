import { HttpStatus, HttpError } from "../common/index";
import { generateToken } from "../helpers/jwt_helper";
import { IUser, UserDocument } from "../models/user_model";
import { IUserRepository } from "./types";

interface ISignIn {
  token: string;
  user: UserDocument;
}

export default class AuthRepository {
  constructor(private readonly userRepository: IUserRepository) {}

  async signUp(user: IUser): Promise<UserDocument | null> {
    const { username } = user;
    const userExist = await this.userRepository.getUserByUserName(username);
    if (userExist)
      throw new HttpError("user already exists", HttpStatus.BAD_REQUEST);
    return await this.userRepository.createEntity(user);
  }

  async signIn(user: IUser): Promise<ISignIn> {
    const { username, password } = user;
    const userExist = await this.userRepository.getUserByUserName(username);
    
    if (!userExist)
      throw new HttpError("user does not exists", HttpStatus.NOT_FOUND);
    const validPassword = userExist.comparePasswords(password);
    if (!validPassword)
      throw new HttpError("Invalida Passwords", HttpStatus.BAD_REQUEST);

    const userToEncode: IUser = {
      name: userExist.name,
      username: userExist.username,
      password: "",
    };

    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }
}
