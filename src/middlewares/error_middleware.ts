import { Request, Response, NextFunction } from "express";

export default function (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
): Response {
  const httpStatus = err.status || 500;
  return res
    .status(httpStatus)
    .send({
      status: httpStatus,
      message: err.message || "Internal server error",
    });
}
