import { Model } from "mongoose";

export default abstract class BaseService<T> {
  constructor(private readonly model: Model<T>) {}

  async getById(id: string): Promise<T | null> {
    const query = await this.model.findById<T>(id).exec();
    const res = query == null ? null : query as T;
    return res;
  }

  async getAllPaginate(pageSize = 5, pageNum = 1): Promise<T[]> {
    const skips = pageSize * (pageNum - 1);
    return await this.model.find<T>().skip(skips).limit(pageSize).exec();
  }

  async createEntity(entity: T) {
    return await this.model.create<T>(entity);
  }

  async updateEntity(id: string, entity: Partial<any>) {
    return await this.model.findByIdAndUpdate<T>(id, entity, { new: true });
  }

  async deleteById(id: string) {
    await this.model.findByIdAndDelete<T>(id);
    return true;
  }
}
