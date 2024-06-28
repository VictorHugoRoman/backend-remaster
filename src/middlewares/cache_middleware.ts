import { Request, Response, NextFunction } from "express";
import mcache from "memory-cache";
import config from "../config";
const { CACHE_KEY } = config;

export default (duration: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = CACHE_KEY + req.url;
    const cachedBody = mcache.get(key);
    if (cachedBody) return res.send(JSON.parse(cachedBody));
    //@ts-ignore
    res.sendMcacheResponse = res.send;

    //sobreescribimos el metodo send del response con la sig funcion
    res.send = (body: any): any => {
      mcache.put(key, body, duration * 1000);
      //@ts-ignore
      res.sendMcacheResponse(body); //ejecutamos funcionalidad original del metoso Response.send
    };
    next(); //en el siguiente middleware(endpoint) ejecutaremos res.send 
  };
};
