import { CommentDocument, CommentModel } from "src/models/comments_model";
import BaseService from "./base_service";

export default class CommentService extends BaseService<CommentDocument> {
  constructor(private readonly commentModel: CommentModel) {
    super(commentModel);
  }
}
