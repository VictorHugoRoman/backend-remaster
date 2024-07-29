import { IdeaDocument } from "../../models";
import { IBaseRepository } from "./";

export interface IIdeaRepository<T> extends IBaseRepository<T> {
  getByAuthor(idAuthor: string): Promise<IdeaDocument[]>;
  upVote(ideaId: string) : Promise<IdeaDocument | null>;
  downVote(ideaId: string) : Promise<IdeaDocument | null>;
}
