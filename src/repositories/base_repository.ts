import BaseService from "../services/base_service";
import { HttpError } from "../common/http_error";
import { HttpStatus } from "../common/http_status";
import { IBaseRepository } from "./types";
import mongoose from "mongoose";

export default abstract class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private readonly service: BaseService<T>) {}

  async getById(id: string): Promise<T | null> {
    if(!mongoose.Types.ObjectId.isValid(id)) throw new HttpError("invalid id", HttpStatus.BAD_REQUEST);
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);
    const currentEntity = await this.service.getById(id);
    if (!currentEntity)
      throw new HttpError("entity does not found", HttpStatus.NOT_FOUND);
    return currentEntity;
  }

  async getAllPaginate(pageSize: number = 5, pageNum: number = 1) {
    return await this.service.getAllPaginate(pageSize, pageNum);
  }

  async createEntity(entity: T) {
    return await this.service.createEntity(entity);
  }

  async updateEntity(id: string, entity: Partial<T>) {
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);
    return await this.service.updateEntity(id, entity);
  }

  async deleteById(id: string) {
    if (!id) throw new HttpError("id must be sent", HttpStatus.BAD_REQUEST);

    return await this.service.deleteById(id);
  }
}
