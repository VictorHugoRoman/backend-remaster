import express, { Router } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";
import { Request, Response } from "express";
import { notFoundMiddleware, errorMiddleware } from "../middlewares/index";
import { getSwaggerJson } from "../config";

import "express-async-errors";

export default function (
  authRoutes: Router,
  userRoutes: Router,
  commentRoutes: Router,
  ideaRoutes: Router
) {
  const router: Router = express.Router();
  const apiRoutes: Router = express.Router(); //variable para los middlewares

  //apiRoutes.use(express.urlencoded({ extended: true })); Middleware to handle form data
  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  //apiRoutes.use("/home", HomeRoutes);
  apiRoutes.use("/idea", ideaRoutes);
  apiRoutes.use("/comment", commentRoutes);
  apiRoutes.use("/user", userRoutes);
  apiRoutes.use("/auth", authRoutes);

  router.get("/", (_req: Request, _res: Response) => {
    return _res.json({ result: "✌️ Express loaded" }).status(200);
  });

  router.use("/v2/api", apiRoutes);

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  router.use("/api-docs", swaggerUI.serve);
  router.use("/api-docs", swaggerUI.setup(getSwaggerJson()));
  return router;
}
