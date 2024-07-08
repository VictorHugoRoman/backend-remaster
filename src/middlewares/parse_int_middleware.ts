import { Request, Response, NextFunction } from "express";
import { PQGetAll, RQCustom } from "src/controllers/types";


export default function (req: RQCustom<PQGetAll>, res: Response, next: NextFunction): void {
    let queryStrings  = {...req.query};
    console.log("queryStrings ", queryStrings);
    
    req.query = queryStrings; 
    next();
}