import { Router } from "express";
import { AuthController } from "../controllers/index";

export default function (authController: AuthController): Router {
  const router = Router();
  router.post("/signup", authController.signUp);
  router.post("/signin", authController.signIn);
  return router;
}
