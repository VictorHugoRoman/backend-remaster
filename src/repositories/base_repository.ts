import BaseService from '../services/base_service';
import { HttpError } from '../common/http_error';
import { HttpStatus } from '../common/http_status';
import { ICRUDRepository } from '../common/types';

export default abstract class BaseRepository<T> implements ICRUDRepository{
  private readonly bs: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.bs = service;
  }

  async getById(id: string) {
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);
    const currentEntity = await this.bs.getById(id);
    if (!currentEntity) throw new HttpError("entity does not found", HttpStatus.NOT_FOUND);
    return currentEntity;
  }

  async getAllPaginate(pageSize: number, pageNum: number) {
    return await this.bs.getAllPaginate(pageSize, pageNum);
  }

  async createEntity(entity: any) {
    return await this.bs.createEntity(entity);
  }

  async updateEntity(id: string, entity: Partial<T>) {
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);
    return await this.bs.updateEntity(id, entity);
  }

  async deleteById(id: string) {
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);
    
    return await this.bs.deleteById(id);
  }
}