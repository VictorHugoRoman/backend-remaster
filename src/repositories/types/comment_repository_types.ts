import { IComment, IdeaDocument  } from "../../models";
import { IBaseRepository } from "./";

export interface ICommentRepository<T> extends IBaseRepository<T> {
  getByIdea(ideaId: string): Promise<IComment[]>;
  create(comment: IComment, ideaId: string, authorId: string): Promise<IdeaDocument | null>;
}
