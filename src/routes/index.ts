import express, { Router } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
//import swaggerUI from "swagger-ui-express";
import { Request, Response } from "express";
import { notFoundMiddleware, errorMiddleware } from "../middlewares/index";

import "express-async-errors";

//const {SWAGGER_PATH} = require('../Config');//obtenemos la ruta del documento d config de swagger
//const swaggerDocument = require(SWAGGER_PATH);//obtenemos l documento

export default function (
  authRoutes: Router,
  userRoutes: Router,
  commentRoutes: Router,
  ideaRoutes: Router
) {
  const router: Router = express.Router();
  const apiRoutes: Router = express.Router(); //variable para los middlewares

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

  //router.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
}
