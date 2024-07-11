import  Router  from 'express'; 
import {authMiddleware} from '../middlewares';
import { CommentController } from 'src/controllers';

export default function (commentController: CommentController ) {
    const router = Router();
    
    router.delete("/:id", authMiddleware, commentController.delete);
    router.get("/:id/unique", commentController.get);
    router.patch("/:id", authMiddleware, commentController.update);

    router.get("/:ideaId", commentController.getByIdea);    
    router.post("/:ideaId", authMiddleware, commentController.createComment);
    return router;
}