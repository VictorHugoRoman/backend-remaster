import { CommentDocument, IComment } from "src/models/comments_model";
import { IdeaService, CommentService, UserService } from "src/services/";
import { HttpError, HttpStatus } from "../common";
import { IdeaDocument } from "../models";
import BaseRepository from "./base_repository";
import { ICommentRepository } from "./types";

export class CommentRepository
  extends BaseRepository<CommentDocument>
  implements ICommentRepository<CommentDocument>
{
  constructor(
    private readonly commentService: CommentService,
    private readonly ideaService: IdeaService,
    private readonly userService: UserService
  ) {
    super(commentService);
  }

  async getByIdea(ideaId: string): Promise<IComment[]> {
    if (!ideaId)
      throw new HttpError("author must be sent", HttpStatus.BAD_REQUEST);
    const idea = await this.ideaService.getById(ideaId);
    if (!idea) throw new HttpError("idea does not exist", HttpStatus.NOT_FOUND);
    const { comments } = idea;
    return comments;
  }

  async create(comment: IComment, ideaId: string, authorId: string): Promise<IdeaDocument | null> {
    const author = await this.userService.getById(authorId);
    if (!author) throw new HttpError("author does not exist", HttpStatus.BAD_REQUEST);
    const idea = await this.ideaService.getById(ideaId);
    if (!idea) throw new HttpError("idea does not exist", HttpStatus.NOT_FOUND);
    const createdComment = await this.commentService.createEntity(comment as CommentDocument);
    idea.comments.push(createdComment);
    return await this.ideaService.updateEntity(ideaId, {comments: idea.comments,});
  }
}
