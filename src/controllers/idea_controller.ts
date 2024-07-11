import { IdeaDocument } from "src/models";
import { IdeaRepository } from "../repositories";
import { PPFK } from "./types/idea_controller_type";
import { Response } from "express";
import { RPCustom } from "./types/index";
import BaseController from "./base_controller";

export class IdeaController extends BaseController<IdeaDocument> {
  constructor(private readonly ideaRepository: IdeaRepository) {
    super(ideaRepository);
  }

  async getByAuthor(req: RPCustom<PPFK>, res: Response): Promise<void> {
    const { userId } = req.params;
    const ideas = await this.ideaRepository.getByAuthor(userId);
    res.send(ideas);
  }

  async upVote(req: RPCustom<PPFK>, res: Response): Promise<void> {
    const { ideaId } = req.params;
    const idea = await this.ideaRepository.upVote(ideaId);
    res.send(idea);
  }

  async downVote(req: RPCustom<PPFK>, res: Response): Promise<void> {
    const { ideaId } = req.params;
    const idea = await this.ideaRepository.downVote(ideaId);
    res.send(idea);
  }
}
