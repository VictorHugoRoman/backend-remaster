import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

export interface Config {
  PORT: string;
  MONGO_URI: string;
  APPLICATION_NAME: string;
  JWT_SECRET: string;
  CACHE_KEY: string;
  SWAGGER_DOC: string;
  SWAGGER_PATH: string;
}

const config: Config = {
  PORT: process.env.PORT ?? '',
  MONGO_URI: process.env.MONGO_URI ?? '',
  APPLICATION_NAME: process.env.APPLICATION_NAME ?? '',
  JWT_SECRET: process.env.JWT_SECRET ?? '',
  CACHE_KEY: process.env.CACHE_KEY ?? '',
  SWAGGER_DOC: process.env.SWAGGER_DOC ?? '',
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`,
};

export default config;