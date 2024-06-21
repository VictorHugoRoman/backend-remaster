export interface ICRUDRepository {
  getById(id: string): Promise<any>;
  getAllPaginate(pageSize: number, pageNum: number): Promise<any[]>;
  createEntity(entity: any): Promise<any>;
  updateEntity(id: string, entity: any): Promise<any>;
  deleteById(userName: string): Promise<boolean>;
}
