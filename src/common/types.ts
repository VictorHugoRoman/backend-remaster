import { IUser } from "src/models/user_model";

export interface IBaseRepository {
  getById(id: string): Promise<any>;
  getAllPaginate(pageSize: number, pageNum: number): Promise<any[]>;
  createEntity(entity: any): Promise<any>;
  updateEntity(id: string, entity: IUser): Promise<any>;
  deleteById(userName: string): Promise<boolean>;
}
