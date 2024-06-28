import { Request } from "express";
import { IUser } from "src/models/user_model";

//RequestQueryNombreMetodo

//types to requests parameters users controller
export type RPGet = { userId: string};
export type RPUpdate = { userId: string};
export type RQGetAll = { pageSize: number, pageNum: number };
export type RQDelete = { userId: string};
export type RBUpdate =  IUser;

export type RQCustom<T> = Request<any, any, any, T>;
export type RPCustom<T> = Request<T>;
export type RBPCustom<T1, T2> = Request<T1, any, T2>;