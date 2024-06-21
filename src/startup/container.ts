import {
  createContainer,
  asClass,
  asValue,
  asFunction,
  AwilixContainer,
  InjectionMode,
} from "awilix";
import { userModel } from "../models";
import { authRoutes } from "../routes/index.routes";
import { authController } from "../controllers";
import { authRepository } from "../repositories";
import { userService } from "../services";
import endpoints from "../routes";
import config from "../config";
import {default as server} from ".";
import express from "express";

const container: AwilixContainer = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true
});

//## injecton config
container.register({
  router: asFunction<express.Router>(endpoints).singleton(),
  config: asValue(config),
  app: asClass(server).singleton()
  });
  
//## injection models
container.register({ userModel: asValue(userModel) });

//## injection services
container.register({
  userService: asClass(userService).singleton(),
});

//## injection repositories
container.register({
  authRepository: asClass(authRepository).singleton(),
});

//## injection controllers
container.register({
  authController: asClass(authController.bind(authController)).singleton(),
});

//## injection routes
container.register({ authRoutes: asFunction(authRoutes).singleton() });

export default container;