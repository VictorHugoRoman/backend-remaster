import {Model, Schema, Types, Document, model} from 'mongoose'
import { IUser } from './user_model';
import populate from 'mongoose-autopopulate';
import { COMMENTS as COMMENT } from './name_models';

export type IComment = 
{
    _id: Types.ObjectId;
    comment: string;
    description: string;
    author: IUser;
}
export type CommentDocument = Document & IComment;
export type CommentModel = Model<CommentDocument>;

const commentSchema = new Schema<CommentDocument, CommentModel>({
    comment: { type: String, required: true },
    description: { type: String },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    }
});

commentSchema.plugin(populate);

export default model<CommentDocument, CommentModel>(COMMENT, commentSchema);
