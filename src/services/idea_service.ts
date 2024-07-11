import { IdeaDocument } from '../models';
import BaseService from './base_service';
import { IdeaModel } from "../models/idea_model";

export default class IdeaService extends BaseService<IdeaDocument> {
  constructor(private readonly ideaModel: IdeaModel) {
    super(ideaModel);
  }

  async getByUser(idUser: string): Promise<IdeaDocument[]> {
    const query = await this.ideaModel.find<IdeaDocument>({ author: idUser }).exec();
    return query;
  }
}