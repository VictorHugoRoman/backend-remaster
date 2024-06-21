import { sign } from 'jsonwebtoken';
import config  from '../config';
import { IUser, IUserSchema } from 'src/models/user_model';


export function generateToken(user: IUser): string {
  return sign({ user }, config.JWT_SECRET ?? '', { expiresIn: '4h' });
}
