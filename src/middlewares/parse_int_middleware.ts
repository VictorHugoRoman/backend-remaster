import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction): void {
    const { queryStrings } : any = {...req.query};
    for(const key in queryStrings)
    {
        const length = queryStrings[key].length; 
        const isValid = length >= 20 ? false : !isNaN(parseInt(queryStrings[key])); //validamos a 20 ya q nos topamos con valores de mongoose y estos valores son string con tamaño mayores de 20
        if (isValid) {
            queryStrings[key] = parseInt(queryStrings[key]); 
        }
    }
    req.query = queryStrings; 
    next();
}