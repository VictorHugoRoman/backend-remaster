import { sign } from 'jsonwebtoken';
import { config }  from '../config';
import { IUserToEncode } from '../repositories/types';


export function generateToken(user: IUserToEncode): string {
  return sign({ user }, config.JWT_SECRET, { expiresIn: '60' }); //'4h';
}
