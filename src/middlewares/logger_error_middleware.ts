import winston from "winston";
import expressWinston from "express-winston";
import { Request, Response, NextFunction } from "express";

export default function (err: any,req: Request,res: Response,next: NextFunction): void {
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  });
}
