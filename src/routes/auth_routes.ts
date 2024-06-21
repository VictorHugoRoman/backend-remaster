import { Router } from 'express'; 
import {authController} from '../controllers/index'


export default function (authController:authController): Router {
    const router = Router();
    router.post("/signup", authController.signUp);
    router.post("/signin", authController.signIn);
    return router;
}