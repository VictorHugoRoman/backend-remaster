import { IComment, IIdea } from "src/models";
import { IUser } from "../../models/user_model";


//PP : Parameter Parameters
//PQ : Parameter Query
//PB : Parameter Body

export type PBUpdate =  IUser | IComment | IIdea; //aqui poner las diferentes entidades o any si el proyecto crece
export type PBCreate =  IUser | IComment | IIdea;
export type PPDelete = { id: string};
export type PPGetId = { id: string};
export type PPUpdate = { id: string};
export type PQGetAll = { pageSize: number, pageNum: number };