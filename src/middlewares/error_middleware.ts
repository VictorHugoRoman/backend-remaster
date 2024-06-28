import { Request, Response, NextFunction } from "express";

export default function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  const httpStatus = err.status || 500;
  return res
    .status(httpStatus)
    .send({
      status: httpStatus,
      message: err.message || "Internal server error",
    });
}
