import { Model, Schema, model, Document } from 'mongoose';
import { IUser } from './user_model';
import { IComment } from './comments_model';
import { IDEA } from './name_models';
import populate from 'mongoose-autopopulate';

export type IIdea = {
    idea: string;
    description: string;
    upvotes: boolean[];
    downvotes: boolean[];
    author: IUser;
    comments: IComment[];
}
export type IdeaDocument = Document & IIdea;
export type IdeaModel = Model<IdeaDocument>;


const ideaSchema = new Schema<IdeaDocument, IdeaModel>({
    idea: { type: String, required: true },
    description: { type: String },
    upvotes: [{ type: Boolean }],
    downvotes: [{ type: Boolean }],
    author: { 
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comment",
            required: false,
            autopopulate: true
        }
    ]
});

ideaSchema.plugin(populate);

export default model<IdeaDocument, IdeaModel>(IDEA, ideaSchema);