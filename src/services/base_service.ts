import { Model, Document } from "mongoose";

export default abstract class BaseService {
  constructor(private model: Model<any>) {}

  async getById(id: string) {
    const res = await this.model.findById(id);
    console.log("service ", res);
    return res;
  }

  async getAllPaginate(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return await this.model.find().skip(skips).limit(pageSize);
  }

  async createEntity(entity: any) {
    return await this.model.create(entity);
  }

  async updateEntity(id: string, entity: Partial<any>) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async deleteById(id: string) {
    await this.model.findByIdAndDelete(id);
    return true;
  }
}
