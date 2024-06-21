import { Model } from "mongoose";

export default abstract class BaseService<T> 
{
  private _sch: Model<T>;

  constructor(schema: Model<T>) {
    this._sch = schema;
  }

  async getById(id: string) {    
    return await this._sch.findById(id);
  }

  async getAllPaginate(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return await this._sch.find().skip(skips).limit(pageSize);
  }

  async createEntity(entity: any) {
    return await this._sch.create(entity);
  }

  async updateEntity(id: string, entity: Partial<T>) {
    return await this._sch.findByIdAndUpdate(id, entity, { new: true });
  }

  async deleteById(id: string) {
    await this._sch.findByIdAndDelete(id);
    return true;
  }
}
