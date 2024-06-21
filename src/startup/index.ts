import express, { Express } from "express";
import { Config } from "../config/index";

export default class Server {
  private _express: Express;
  private _config: Config;

  constructor(config: Config, router: express.Router) {
    this._config = config;
    this._express = express().use(router);
  }

  Start(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this._express && this._config) {
        this._express.listen(this._config.PORT, () => {
          console.log(this._config.APPLICATION_NAME +" API running on port: " +this._config.PORT);
          resolve();
        });
      } else throw new Error("Express instance or config is not initialized.");
    });
  }
}