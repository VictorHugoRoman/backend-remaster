import { Response, NextFunction } from "express";
import { PQGetAll, RQCustom } from "src/controllers/types";

//CON TYPESCRIPT YA NO ES NECESARIO PARSEAR LOS QUERY PARAMS

export default function (req: RQCustom<PQGetAll>, _: Response, next: NextFunction): void {
    let queryStrings  = {...req.query};
    console.log("queryStrings ", queryStrings);
    
    req.query = queryStrings; 
    next();
}