import { Router } from "express";
import {
  authMiddleware,
  parseIntMiddleware,
  cachemiddleware,
} from "../middlewares";
import { UserController } from "../controllers";
import { cacheTime } from  '../helpers';

export default function (userController: UserController) {
  const router: Router = Router();
  router.get("/:userId", userController.get);
  router.get("", [parseIntMiddleware, cachemiddleware(cacheTime.ONE_HOUR)], userController.getAll);
  router.put("/:userId", [authMiddleware], userController.update);
  router.delete("/:userId", authMiddleware, userController.delete);
  return router;
}
