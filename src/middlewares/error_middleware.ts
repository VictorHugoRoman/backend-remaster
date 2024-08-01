import { HttpError } from "@src/common";
import { Request, Response, NextFunction } from "express";

export default function (err: HttpError, _: Request, res: Response, __: NextFunction): Response {
  const httpStatus = err.statusCode || 500;
  return res
    .status(httpStatus)
    .send({
      status: httpStatus,
      message: err.message || "Internal server error",
    });
}
