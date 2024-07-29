import { Response } from "express";
import { CommentDocument } from "src/models";
import BaseController from "./base_controller";
import { CommentRepository } from "../repositories";
import { RPBCustom, RPCustom } from "./types/index";
import { PBCC, PPFK } from "./types/comment_controller_type";

export class CommentController extends BaseController<CommentDocument> {
  constructor(private readonly commentRepository: CommentRepository) {
    super(commentRepository);
  }

  async getByIdea(req: RPCustom<PPFK>, res: Response): Promise<void> {
    const { ideaId } = req.params;
    const comments = await this.commentRepository.getByIdea(ideaId);
    res.send(comments);
  }

  async createComment(req: RPBCustom<PPFK, PBCC>, res: Response): Promise<void> {
    const { ideaId } = req.params;
    const { body } = req;
    //@ts-ignore
    const { _id } = req.user;
    const createdComment = await this.commentRepository.create(body,ideaId,_id.toString());
    res.status(201).send(createdComment);
  }
}
