import { Router } from "express";
import { authMiddleware, cachemiddleware } from "../middlewares";
import { UserController } from "../controllers";
import { cacheTime } from "../helpers";

export default function (userController: UserController): Router {
  const router: Router = Router();
  
  router.delete("/:userId", authMiddleware, userController.delete);
  router.get("",[cachemiddleware(cacheTime.ONE_HOUR)],userController.getAll);
  router.get("/:id", userController.get);
  router.put("/:userId", [authMiddleware], userController.update);
  return router;
}
