import {
  createContainer,
  asClass,
  asValue,
  asFunction,
  AwilixContainer,
  InjectionMode,
} from "awilix";
import { CommentDocument, CommentModel, IdeaDocument, IdeaModel, UserDocument, UserModel } from "../models";
import { AuthRoutes, CommentRoutes, IdeaRoutes, UserRoutes } from "../routes/index.routes";
import { AuthController, CommentController, IdeaController, UserController } from "../controllers";
import { AuthRepository, CommentRepository, IdeaRepository, UserRepository } from "../repositories";
import { CommentService, HomeService, IdeaService, UserService } from "../services";
import { IAuthRepository, ICommentRepository, IIdeaRepository, IUserRepository } from "src/repositories/types";
import { default as server } from ".";
import endpoints from "../routes";
import { config } from "../config";
import express from "express";

const container: AwilixContainer = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true,
});

//## injecton config
container.register({
  router: asFunction<express.Router>(endpoints).singleton(),
  config: asValue(config),
  app: asClass(server).singleton(),
});

//## injection models
container.register({ commentModel: asValue(CommentModel) });
container.register({ ideaModel: asValue(IdeaModel) });
container.register({ userModel: asValue(UserModel) });

//## injection services
container.register({
  commentService: asClass(CommentService).singleton(),
  homeService: asClass(HomeService).singleton(),
  userService: asClass(UserService).singleton(),
  ideaService: asClass(IdeaService).singleton()
});

//## injection repositories
container.register({
  authRepository: asClass<IAuthRepository>(AuthRepository).singleton(),
  commentRepository:
    asClass<ICommentRepository<CommentDocument>>(CommentRepository).singleton(),
  ideaRepository:
    asClass<IIdeaRepository<IdeaDocument>>(IdeaRepository).singleton(),
  userRepository:
    asClass<IUserRepository<UserDocument>>(UserRepository).singleton(),
});

//## injection controllers
container.register({
  authController: asClass(AuthController).singleton(),
  commentController: asClass(CommentController).singleton(),
  ideaController: asClass(IdeaController).singleton(),
  userController: asClass(UserController).singleton(),
});

//## injection routes
container.register({
  authRoutes: asFunction<express.Router>(AuthRoutes).singleton(),
  commentRoutes: asFunction<express.Router>(CommentRoutes).singleton(),
  ideaRoutes: asFunction<express.Router>(IdeaRoutes).singleton(),
  userRoutes: asFunction<express.Router>(UserRoutes).singleton()
});

export default container;
