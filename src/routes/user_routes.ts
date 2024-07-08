import { Router, Request, Response } from "express";
import {
  authMiddleware,
  parseIntMiddleware,
  cachemiddleware,
} from "../middlewares";
import { UserController } from "../controllers";
import { cacheTime } from  '../helpers';

export default function (userController: UserController): Router {
  const router: Router = Router();
  router.get("/get-all",authMiddleware, (_req: Request, _res: Response) => {
    return _res.json( {data: [1,2,3,4,5]});
  });
  router.get("/:id", userController.get);
  
  router.get("", [/*parseIntMiddleware,*/ cachemiddleware(cacheTime.ONE_HOUR)], userController.getAll);
  router.put("/:userId", [authMiddleware], userController.update);
  router.delete("/:userId", authMiddleware, userController.delete);
  return router;
}
