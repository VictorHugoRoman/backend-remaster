import { HttpStatus, HttpError } from "../common/index";
import { generateToken } from "../helpers/jwt_helper";
import { IUser, IUserSchema } from "../models/user_model";
import { IUserRepository } from "./types";

export default class AuthRepository {
  private readonly _us: IUserRepository;

  constructor(UserService: IUserRepository) {
    this._us = UserService;
  }

  async signUp(user: IUser): Promise<IUserSchema | null> {
    const { username } = user;
    const userExist = await this._us.getUserByUserName(username);
    if (userExist) throw new HttpError("user already exists", HttpStatus.BAD_REQUEST);
    return await this._us.createEntity(user);
  }
  
  async signIn(user: IUser): Promise<ISignIn> {
    const { username, password } = user;
    const userExist = await this._us.getUserByUserName(username);
    
    if (!userExist) throw new HttpError("user does not exists", HttpStatus.NOT_FOUND);
    const validPassword = userExist.comparePasswords(password);
    if (!validPassword) throw new HttpError("Invalida Passwords", HttpStatus.BAD_REQUEST)

      const userToEncode: IUser= {
        name: userExist.name,
        username: userExist.username,
        id: userExist.id,
        password: ""
      };
    
    const token = generateToken(userToEncode);
    
    return { token, user: userExist };
  }
}

interface ISignIn{
  token: string,
  user:IUserSchema
}