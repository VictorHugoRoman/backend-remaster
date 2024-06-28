import { Request, Response } from "express";
import { IUserRepository } from "../repositories/types";
import {
  RQCustom,
  RQGetAll,
  RQDelete as RPDelete,
  RPCustom,
  RPGet,
  RBPCustom,
  RPUpdate,
  RBUpdate,
} from "./types/index";
import { IUser } from "src/models/user_model";

export default class UserController {
  constructor(private readonly userRepository: IUserRepository) {}

  get = async (req: RPCustom<RPGet>, res: Response): Promise<any> => {
    const { userId } = req.params;
    const user = await this.userRepository.getById(userId);
    return res.send(user);
  };

  getAll = async (req: RQCustom<RQGetAll>, res: Response) => {
    const { pageSize, pageNum } = req.query;
    const users = await this.userRepository.getAllPaginate(pageSize, pageNum);
    return res.send(users);
  };

  create = async (req: Request<any, any, IUser>, res: Response) => {
    const { body } = req;
  };

  update = async (
    req: RBPCustom<RPUpdate, RBUpdate>,
    res: Response
  ): Promise<Response> => {
    const { body } = req;
    const { userId } = req.params;
    const updateUser = await this.userRepository.updateEntity(userId, body);
    return res.send(updateUser);
  };

  delete = async (req: RPCustom<RPDelete>, res: Response) => {
    const { userId } = req.params;
    const deleteUser = await this.userRepository.deleteById(userId);
    return res.send(deleteUser);
  };
}
