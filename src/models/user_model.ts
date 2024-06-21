import mongoose from "mongoose";
import { compareSync, hashSync, genSaltSync } from "bcryptjs";

const { Schema } = mongoose;

export interface IUser {
    id: string;
    name: string;
    username: string;
    password: string;  
}

export interface IUserSchema extends Document {
  user: IUser; 
  id: string;
  name: string;
  username: string;
  password: string;
  comparePasswords(candidatePassword: string): boolean;
  toJSON(): any;
}

const userSchema = new Schema<IUserSchema>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

userSchema.methods.comparePasswords = function (password: string) {
  return compareSync(password, this.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified) return next();
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

export default mongoose.model<IUserSchema>("user", userSchema);
