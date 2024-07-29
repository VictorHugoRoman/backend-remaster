import { Request, Response, NextFunction } from "express";

export default function (
  _: Request,
  res: Response,
  __: NextFunction
): void {
  res.status(404).send({ status: 404, message: "Resource not found" });
}
