import { Response } from "express";
import BaseRepository from "src/repositories/base_repository";
import {
  RPCustom,
  RQCustom,
  PBUpdate,
  PPDelete,
  PPGetId,
  PPUpdate,
  PQGetAll,
  RPBCustom,
  RBCustom,
  PBCreate
} from "./types";

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

  create = async (req: RBCustom<PBCreate>, res: Response): Promise<void> => {
    const { body } = req;
    const data = await this.baseRepository.createEntity(body as T);
    res.status(201).send(data); 
  };

  update = async (req: RPBCustom<PPUpdate, PBUpdate>,res: Response): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
    const updateUser = await this.baseRepository.updateEntity(id, body as T);
    res.send(updateUser);
  };

  delete = async (req: RPCustom<PPDelete>, res: Response): Promise<void> => {
    const { id } = req.params;
    const deleteUser = await this.baseRepository.deleteById(id);
    res.send(deleteUser);
  };
}
