import { Schema, Document, model } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contracts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Contract",
      default: [],
    },
  ],
});

export interface IUser extends Document {
  _id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  contracts: [string];
}

export default model<IUser>("User", userSchema);
