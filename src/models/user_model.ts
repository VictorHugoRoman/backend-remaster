import { Model, Schema, model, Document, Query, Types, CallbackWithoutResultAndOptionalError } from 'mongoose';
import { compareSync, hashSync, genSaltSync } from "bcryptjs";

export interface IUser {
  name: string;
  username: string;
  password: string;
}

export interface IUserMethods {
  comparePasswords(candidatePassword: string): Promise<boolean>;
}

export type UserDocument = Document & IUser & IUserMethods;

export type UserModel = Model<UserDocument>;

const userSchema = new Schema<UserDocument, UserModel>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

userSchema.method('comparePasswords', async function(password: string) {
  return compareSync(password, this.password);
});


userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified) return next();
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

// Aplicar el middleware a las operaciones relevantes
userSchema.pre('findOne', validateObjectId);
userSchema.pre('findOneAndUpdate', validateObjectId);
userSchema.pre('findOneAndDelete', validateObjectId);


function validateObjectId(this: Query<any, any>, next: CallbackWithoutResultAndOptionalError) {
  const id = this.getQuery()._id;
  if (id && !Types.ObjectId.isValid(id)) {
    this.findOne({ _id: "INVALID_ID" }); 
    next();
  }
}

const User = model<UserDocument, UserModel>('User', userSchema);
export default User;
