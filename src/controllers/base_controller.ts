import { Request, Response } from "express";
import BaseRepository from "src/repositories/base_repository";
import {
  RBPCustom,
  RPCustom,
  RQCustom,
  PBUpdate,
  PPDelete,
  PPGetId,
  PPUpdate,
  PQGetAll,
} from "./types";
import { IUser } from "src/models/user_model";

export default abstract class BaseController<T> {
  constructor(private readonly baseRepository: BaseRepository<T>) {}

  get = async (req: RPCustom<PPGetId>, res: Response): Promise<void> => {
    const { id } = req.params;
    const entity = await this.baseRepository.getById(id);
    res.send(entity);
  };

  getAll = async (req: RQCustom<PQGetAll>, res: Response): Promise<void> => {
    const { pageSize, pageNum } = req.query;
    const data = await this.baseRepository.getAllPaginate(pageSize, pageNum);
    res.send(data);
  };

  create = async (req: Request<any, any, IUser>,res: Response): Promise<void> => {
    const { body } = req;
  };

  update = async (req: RBPCustom<PPUpdate, PBUpdate>,res: Response): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
    const updateUser = await this.baseRepository.updateEntity(id, body);
    res.send(updateUser);
  };

  delete = async (req: RPCustom<PPDelete>, res: Response): Promise<void> => {
    const { id } = req.params;
    const deleteUser = await this.baseRepository.deleteById(id);
    res.send(deleteUser);
  };
}
