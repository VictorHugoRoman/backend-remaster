import {
  createContainer,
  asClass,
  asValue,
  asFunction,
  AwilixContainer,
  InjectionMode,
} from "awilix";
import { UserModel } from "../models";
import { AuthRoutes, UserRoutes } from "../routes/index.routes";
import { AuthController as AuthController, UserController } from "../controllers";
import { AuthRepository, UserRepository } from "../repositories";
import { UserService } from "../services";
import endpoints from "../routes";
import config from "../config";
import { default as server } from ".";
import express from "express";
import { IUserRepository } from "src/repositories/types";
import BaseService from "../services/base_service";

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
container.register({ userModel: asValue(UserModel) });

//## injection services
container.register({
  userService: asClass(UserService).singleton()
});

//## injection repositories
container.register({
  authRepository: asClass(AuthRepository).singleton(),
  userRepository: asClass<IUserRepository>(UserRepository).singleton()
});

//## injection controllers
container.register({
  authController: asClass(AuthController).singleton(),
  userController: asClass(UserController).singleton(),
});

//## injection routes
container.register({
  authRoutes: asFunction<express.Router>(AuthRoutes).singleton(),
  userRoutes: asFunction<express.Router>(UserRoutes).singleton()
});

export default container;
