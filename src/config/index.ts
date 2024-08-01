import path from 'path';
import dotenv from 'dotenv';
import { parse } from 'yaml';
import { readFileSync } from 'fs';


if (process.env.NODE_ENV !== 'production') dotenv.config();

export type Config = {
  PORT: string;
  MONGO_URI: string;
  APPLICATION_NAME: string;
  JWT_SECRET: string;
  CACHE_KEY: string;
  SWAGGER_DOC: string;
  SWAGGER_PATH: string;
}

export const config: Config = {
  PORT: process.env.PORT ?? '',
  MONGO_URI: process.env.MONGO_URI ?? '',
  APPLICATION_NAME: process.env.APPLICATION_NAME ?? '',
  JWT_SECRET: process.env.JWT_SECRET ?? '',
  CACHE_KEY: process.env.CACHE_KEY ?? '',
  SWAGGER_DOC: process.env.SWAGGER_DOC ?? '',
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.yaml`,
};



export const getSwaggerJson =  () => {
  const swaggerDoc = process.env.SWAGGER_DOC;
  if (!swaggerDoc) {
    throw new Error('SWAGGER_DOC environment variable is not set');
  }
  const jsonPath = path.resolve(__dirname, config.SWAGGER_PATH);
  const fileContent = readFileSync(jsonPath, 'utf-8');
  return parse(fileContent);
};


