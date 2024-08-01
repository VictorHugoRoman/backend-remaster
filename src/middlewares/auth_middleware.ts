import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { HttpError, HttpStatus } from '../common';
import { IUser } from "../models/user_model";

type JwtPayload = {
  user: IUser;
}

//cada que usemos este middleware le agregamos el usuario(IUser) al request para qst disponible al siguiente middleware

export default (req: Request, _: Response, next: NextFunction): void => {
  const token = req.headers["authorization"]; 
  if (!token) throw new HttpError("Token must be sent", HttpStatus.UNAUTHORIZED, "authmiddleware");// return res.send("Token must be sent").status(HttpStatus.BAD_REQUEST); //forma de retornar un bad request sin throw new HttpError
  jwt.verify(token, config.JWT_SECRET, function (error, decodeToken) {
    if (error) throw new HttpError("Invalid Token", HttpStatus.UNAUTHORIZED, "authmiddleware");
    const { user } = decodeToken as JwtPayload;
    //@ts-ignore
    req.user = user;
    next();
  });
};
