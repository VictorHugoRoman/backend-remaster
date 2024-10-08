import { Request } from 'express';

//RB : Request Body
//RBP : Request Body Parameters
//RBPQ : Request Body Parameters Query
//RP : Request Parameters
//RQ : Request Query

export type RBCustom<T> = Request<any, any, T>;
export type RPBCustom<T1, T2> = Request<T1, any, T2>;
export type RPCustom<T> = Request<T>;
export type RQCustom<T> = Request<any, any, any, T>;
