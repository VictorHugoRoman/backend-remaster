import { Request, Response, NextFunction } from "express";

export default function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.status(404).send({ status: 404, message: "Resource not found" });
}
