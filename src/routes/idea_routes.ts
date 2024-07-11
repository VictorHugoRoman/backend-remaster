
import  Router  from 'express'; 
import {authMiddleware} from '../middlewares';
import { IdeaController } from '../controllers'

export default function (ideaController:  IdeaController ) {
    const router = Router();

    router.delete("/:id", authMiddleware, ideaController.delete);
    router.get("/:id", ideaController.get);
    router.patch("/:id", authMiddleware, ideaController.update);
    router.post("", ideaController.create);
    router.get("", [/*parseIntMiddleware*/], ideaController.getAll);
    
    router.get("/:userId/all", ideaController.getByAuthor);
    router.post("/:ideaId/downvote", authMiddleware, ideaController.downVote);
    router.post("/:ideaId/upvote", authMiddleware, ideaController.upVote);
    return router;
}