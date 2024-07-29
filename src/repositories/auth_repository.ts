import { HttpStatus, HttpError } from "../common/index";
import { generateToken } from "../helpers/jwt_helper";
import { IUser, UserDocument } from "../models";
import { ISignIn, IUserToEncode, IUserRepository, IAuthRepository } from "./types";

export class AuthRepository implements IAuthRepository {
  constructor(private readonly userRepository: IUserRepository<UserDocument>) {}

  async signUp(user: IUser): Promise<UserDocument | null> {
    const { username } = user;
    const userExist = await this.userRepository.getByUserName(username);
    if (userExist) throw new HttpError("user already exists", HttpStatus.BAD_REQUEST);
    return await this.userRepository.createEntity(user as UserDocument);
  }

  async signIn(user: IUser): Promise<ISignIn> {
    const { username, password } = user;
    if(password == undefined)
      throw new HttpError("password undefinded", HttpStatus.BAD_REQUEST);
    const userExist = await this.userRepository.getByUserName(username);
    if (!userExist)
      throw new HttpError("user does not exists", HttpStatus.NOT_FOUND);
    const validPassword = userExist.comparePasswords(password);
    if (!validPassword)
      throw new HttpError("Invalid Passwords", HttpStatus.BAD_REQUEST);

    const userToEncode: IUserToEncode = {
      username: userExist.username,
      id: userExist._id.toString(),
    };

    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }
}
