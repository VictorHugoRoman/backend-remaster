import { IUser } from "../../models/user_model";


//PP : Parameter Parameters
//PQ : Parameter Query
//PB : Parameter Body

export type PBUpdate =  IUser; //aqui poner las diferentes entidades o any si el proyecto crece
export type PPDelete = { id: string};
export type PPGetId = { id: string};
export type PPUpdate = { id: string};
export type PQGetAll = { pageSize: number, pageNum: number };