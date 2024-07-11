export interface IBaseRepository<T> {
  getById(id: string): Promise<T | null>;
  getAllPaginate(pageSize: number, pageNum: number): Promise<T[]>;
  createEntity(entity: T): Promise<T>;
  updateEntity(id: string, entity: T  ): Promise<T | null>;
  deleteById(userName: string): Promise<boolean>;
}
